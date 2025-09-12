---
title: Export a CSV file of Bitly links
---

I've been working on some chores related to my domains and wanted to archive my Bitly-powered short links at `l.thzinc.com`. Bitly's bulk CSV export tools aren't available on free accounts, so I wrote a quick script with `curl` and `jq` to download a CSV of my short links.

First, I generated an [API access token for Bitly](https://app.bitly.com/settings/api). Then I wrote the following script, named `export_bitly_links.sh`:

```bash
#!/bin/bash
set -euo pipefail

if [ -z ${BITLY_API_KEY+x} ]; then
    echo 'BITLY_API_KEY must be set' 2>&1
    exit
fi

echo 'SOURCE_URL,TARGET_URL'
curl -sH "Authorization: Bearer $BITLY_API_KEY" 'https://api-ssl.bitly.com/v4/groups' \
    | jq -r '.groups[].guid' \
    | while read group; do
        NEXT_URL="https://api-ssl.bitly.com/v4/groups/$group/bitlinks"
        while :; do
            PAGE=$(curl -sH "Authorization: Bearer $BITLY_API_KEY" "$NEXT_URL")
            jq -r '.links[] | [.id, .long_url]| @csv' <<<"$PAGE"

            NEXT_URL=$(jq -r .pagination.next <<<"$PAGE")
            if [ "$NEXT_URL" = "" ]; then
                exit
            fi
        done
    done
```

(Don't forget to make the script executable via `chmod +x export_bitly_links.sh`)

Then I executed the script via:

```shell
BITLY_API_KEY=THE_API_KEY_GOES_HERE ./export_bitly_links.sh > bitly.csv
```
