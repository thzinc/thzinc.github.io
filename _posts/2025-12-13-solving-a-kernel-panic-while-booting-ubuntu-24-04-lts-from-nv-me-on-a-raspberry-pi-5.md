---
title: Solving a kernel panic while booting Ubuntu 24.04 LTS from NVMe on a Raspberry Pi 5
category: Mini rack
---

I have been working on building a Raspberry Pi [mini rack][category] that includes a Raspberry Pi 5 with a [Pimoroni NVMe Base Duo][pimoroni] with two 2TB NVMe SSDs. I'm choosing to run Ubuntu 24.04 LTS instead of Raspbian for a handful of reasons, but I ran into a kernel panic after cloning the filesystems to the NVMe device.

The kernel panic appeared to be caused by the boot process failing to find the boot device by its label (`LABEL=writable`). Other solutions online indicated that changing `/etc/fstab` from using `LABEL=` to use `PARTUUID=<Partition UUID>` would fix the issue, but that did not solve my problem. Strangely and regardless of using `LABEL=` or `PARTUUID=` in `/etc/fstab`, when I left a bootable SD card or USB drive attached to the Pi 5, the boot process would find the correct disk and boot normally.

After lots of searching around the internet, I learned that my Pi 5's EEPROM was an old release, so I updated the EEPROM to the latest version and the system booted perfectly.

The [official docs for updating the EEPROM][update-eeprom] are reasonable, but since I had already booted my device with a USB disk attached, I downloaded the latest [EEPROM release][eeprom-release], extracted the pieeprom.bin from the bootable image, and ran `sudo rpi-eeprom-update -f pieeprom.bin`.

In my case, I went from a September 2024 version to a December 2025 version.

```
   CURRENT: Mon Sep 23 13:02:56 UTC 2024 (1727096576)
    UPDATE: Mon Dec  8 19:29:54 UTC 2025 (1765222194)
```

[category]: /Mini%20rack/
[pimoroni]: https://shop.pimoroni.com/products/nvme-base-duo-for-raspberry-pi-5
[update-eeprom]: https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#imager
[eeprom-release]: https://github.com/raspberrypi/rpi-eeprom/releases/tag/v2025.12.08-2712
