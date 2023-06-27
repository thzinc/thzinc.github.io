---
title: missingLetters - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #306"
    url: https://buttondown.email/cassidoo/archive/change-is-a-stranger-you-have-yet-to-know-george/
  - title: Social media post
    url:
---

Simple, no-frills solution to this week's question.

[iterator]: https://en.wikipedia.org/wiki/Iterator_pattern

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/change-is-a-stranger-you-have-yet-to-know-george/)
>
> This week’s question:
> **Write a function that takes an array of consecutive, increasing letters as input, and returns any missing letters in the array between the first and last letter.**
>
> Example:
>
> ```
> > missingLetters(['a','b','c','d','f'])
> > ['e']
>
> > missingLetters(['a','b','c','d','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'])
> > ['f','g','v']
> ```

## My solution

{%- capture solution -%}
{% include /code_kata/missingLetters/solution.js %}
{% include /code_kata/missingLetters/tests.js %}
{%- endcapture -%}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=solution -%}
