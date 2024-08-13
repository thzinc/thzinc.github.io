---
title: In Balena, don't override entrypoint if you want to work with pluggable devices
tags: programming
see_also:
  - title: thzinc/smart-home-sensors
    url: https://github.com/thzinc/smart-home-sensors
---

I've been working on a [Balena]-managed deployment of [Kerberos Agents][kerberos-agent] running on Raspberry Pi 4 with the new Camera Module 3, but was having a huge issue trying to get `libcamera` to work inside a container. The documentation has been kind of frustrating, but I finally worked out my issues.

## Kerberos Agent needs MediaMTX

While Kerberos Agent appears to be ready to deploy with Balena right from the repo, it isn't. The Kerberos Agent docs haven't been updated recently enough to make note of `rtsp-simple-server`'s renaming to [MediaMTX]. This should be fine though: MediaMTX also supports running in a container...

## MediaMTX needs to execute from `/dev/shm` and it needs udev

MediaMTX doesn't include deployment via Balena as a covered use case, so there's only mention of [using Docker directly to configure][mediamtx-docker] the container's `tmpfs` and mounting the host's `/run/udev` in the container. However, Balena's build of the OS and its supervisor doesn't permit tweaking `tmpfs` nor binding mountpoints this way.

MediaMTX on Raspberry Pi writes a native executable to a temp file on `/dev/shm`, but Balena mounts this path in the container without the ability to execute programs. I was able to remount this when the container starts with `mount -o remount,rw,nosuid,nodev,exec,relatime /dev/shm`.

However, I kept hitting dead ends trying to get udev to work...

## MediaMTX's Raspberry Pi images overwrite Balena's entrypoint that enables udev

MediaMTX actually uses Balena's container images for Raspberry Pi. (They're a very robust library of device-specific containers!) The [Balena images all have a configured `ENTRYPOINT`][balena-entrypoint] of [`/usr/bin/entry.sh`][entry-sh] that supports configuring udev, but MediaMTX reassigned the `ENTRYPOINT` to its own executable. Because udev wasn't loaded, it couldn't find the Camera Module.

I added `/usr/bin/entry.sh` to my custom entrypoint script and everything worked!

[balena]: https://www.balena.io/
[kerberos-agent]: https://kerberos.io/product/agent/
[mediamtx]: https://github.com/bluenviron/mediamtx/
[balena-entrypoint]: https://docs.balena.io/reference/base-images/base-images/#how-the-images-work-at-runtime
[entry-sh]: https://github.com/balena-io-library/base-images/blob/master/balena-base-images/aarch64/debian/bookworm/run/entry.sh
[mediamtx-docker]: https://github.com/bluenviron/mediamtx/?tab=readme-ov-file#raspberry-pi-cameras
