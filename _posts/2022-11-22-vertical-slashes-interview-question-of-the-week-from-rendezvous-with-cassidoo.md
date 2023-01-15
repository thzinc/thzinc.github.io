---
title: verticalSlashes - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #275"
    url: https://buttondown.email/cassidoo/archive/normal-is-not-something-to-aspire-to-its-4437/
  - title: Submitted solution on Codepen
    url: https://codepen.io/thzinc/pen/poKpxMN?editors=0012
  - title: Social media post
    url: https://onewilshire.la/@thzinc/109380565674919705
---

I do enjoy getting Cassidy's newsletter late Sunday/early Monday and trying my hand at the "interview \[questions] of the week."

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/normal-is-not-something-to-aspire-to-its-4437/)
>
> This week’s question:
> **Write a function that takes a string of slashes (`\` and `/`) and returns all of those slashes drawn downwards in a line connecting them.**
>
> Example:
>
> ```bash
> $ verticalSlashes('\\\//\/\\')
> \
>  \
>   \
>   /
>  /
>  \
>  /
>  \
>   \
> $ verticalSlashes('\\\\')
> \
>  \
>   \
>    \
> ```

## My solution

```javascript
function verticalSlashes(str) {
  let minIndent = 0;
  let lastIndent = 0;
  const lines = [];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === "\\") {
      lastIndent += 1;
    }

    lines.push({
      c,
      relativeIndent: lastIndent,
    });

    if (c === "/") {
      lastIndent -= 1;
    }

    minIndent = Math.min(minIndent, lastIndent);
  }

  const baseIndent = Math.abs(minIndent);
  return lines
    .map(
      ({ c, relativeIndent }) =>
        `${" ".repeat(baseIndent + relativeIndent - 1)}${c}`
    )
    .join("\n");
}

// Tests
console.log(verticalSlashes("\\\\\\//\\/\\\\"));
console.log(verticalSlashes("\\\\\\\\"));

// Extra tests
console.log(verticalSlashes("////"));
console.log(verticalSlashes("/\\\\\\\\"));
console.log(verticalSlashes("\\\\\\|Hello World|///"));
```
