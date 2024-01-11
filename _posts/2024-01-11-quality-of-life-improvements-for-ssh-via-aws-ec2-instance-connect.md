---
title: Quality of life improvements for SSH via AWS EC2 Instance Connect
tags:
  - programming
---

While doing some work in AWS with EC2 instances through Systems Manager, I needed to be able to connect via SSH in a reasonable way. The [AWS docs for Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-enable-ssh-connections.html) show off SSH's `ProxyCommand`, but I also needed to use [EC2 Instance Connect to send my public key](https://docs.aws.amazon.com/cli/latest/reference/ec2-instance-connect/send-ssh-public-key.html) ahead of trying to connect, so I wrote a small script to combine the two operations.

`aws_ssm_proxy.sh`:

Ensure this script is only executable by your own user. (e.g., `chmod 744 aws_ssm_proxy.sh`) Treat it with the same protections you'd use for `~/.ssh/config`.

```bash
#!/bin/bash
set -euo pipefail

REMOTE_USERNAME=$1
REMOTE_HOSTNAME=$2
PORT_NUMBER=$3
shift 3

PREFERRED_PUBLIC_KEY="ssh-rsa AAAAA....." # Replace with what makes sense for your environment
echo "Sending SSH public key for EC2 Instance Connect..."
aws ec2-instance-connect send-ssh-public-key --instance-id "$REMOTE_HOSTNAME" --instance-os-user "$REMOTE_USERNAME" --ssh-public-key "$PREFERRED_PUBLIC_KEY" --no-cli-pager &&
    aws ssm start-session --target "$REMOTE_HOSTNAME" --document-name AWS-StartSSHSession --parameters "portNumber=$PORT_NUMBER" "$@"
```

Take note of `PREFERRED_PUBLIC_KEY` above. This should be set to your public key to use.

- If you use a file, you might set this line to:

  ```bash
  PREFERRED_PUBLIC_KEY=$(cat ~/.ssh/id_rsa.pub)
  ```

- If you use [1Password CLI with the SSH agent](https://developer.1password.com/docs/ssh/agent/), you might use something like:

  ```bash
  PREFERRED_PUBLIC_KEY=$(op read 'op://__VAULT_HERE__/__ITEM_UUID_HERE__/public key')
  ```

- Otherwise, this value can be set to a string with your SSH public key.

Then, update your `~/.ssh/config` to use `aws_ssm_proxy.sh`:

```bash
# SSH over Session Manager
host i-* mi-*
	ProxyCommand ~/.ssh/aws_ssm_proxy.sh %r %h %p
```

Make sure this `host` line is above any default `host *` configuration!

For reference, the [tokens](https://man.openbsd.org/ssh_config.5#TOKENS) used in `ProxyCommand` are:

| Token | Description          |
| ----- | -------------------- |
| `%h`  | The remote hostname. |
| `%p`  | The remote port.     |
| `%r`  | The remote username. |

With this config in place, I can now use normal SSH tools (`ssh`, `scp`, etc.)

```bash
ssh ubuntu@i-xxxxxxxxxxxxxxxx # Use my default AWS profile to connect to an instance
AWS_PROFILE=my_other_profile ssh ubuntu@i-xxxxxxxxxxxxxxxx # Use a particular AWS profile to connect to an instance
```
