---
title: numBalanced - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #288"
    url: https://buttondown.email/cassidoo/archive/to-think-that-everybodys-like-you-is-silly/
  - title: Social media post
    url:
---

This one was fun to think about the minimal amount of processing needed to produce the result. In this case, the question is carefully worded to allow naive processing that's really fast.

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/to-think-that-everybodys-like-you-is-silly/)
>
> This week’s question:
> **Given a string of parenthesis, return the number of parenthesis you need to add to the string in order for it to be balanced.**
>
> Examples:
>
> ```
> > numBalanced(`()`)
> > 0
>
> > numBalanced(`(()`)
> > 1
>
> > numBalanced(`))()))))()`)
> > 6
>
> > numBalanced(`)))))`)
> > 5
> ```

## My solution

_Written as a stream of consciousness_

Upon first glance, I should be able to treat `(` as `+1`, `)` as `-1`, and any other character as `0` and then sum the result. However, if the sum is negative, that would mean there's more `)` than `(` in the string, so I'll probably need to take the absolute value of the sum.

{% capture initial %}
{% include /code_kata/numBalanced/solution.js %}

{% include /code_kata/numBalanced/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=initial -%}

This feels pretty decent. I could rewrite it in a single line with `.reduce()` (as long as I drop the validation that `input` is a string), but it loses a lot of readability.

```javascript
const MAP = {
  "(": 1,
  ")": -1,
};
const numBalanced = (input) =>
  Math.abs(Array.from(input).reduce((sum, c) => sum + (MAP[c] || 0), 0));
```

(This uses `MAP` initialized outside of the function body in order to avoid reinstantiating the object `input.length` times.)
