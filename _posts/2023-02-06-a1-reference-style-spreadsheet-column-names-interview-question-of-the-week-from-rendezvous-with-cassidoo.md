---
title: A1 Reference Style Spreadsheet Column Names - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #286"
    url: https://buttondown.email/cassidoo/archive/talent-without-working-hard-is-nothing-cristiano/
  - title: Social media post
    url: https://onewilshire.la/@thzinc/109822377750062734
---

Nice little brain teaser involving number base conversion 😄

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/talent-without-working-hard-is-nothing-cristiano/)
>
> This week’s question:
> **Spreadsheet programs often use the [A1 Reference Style](https://learn.microsoft.com/en-us/office/troubleshoot/excel/numeric-columns-and-rows#the-a1-reference-style) to refer to columns. Given a column name in this style, return its column number.**
>
> Examples of column names to their numbers:
>
> ```
> A -> 1
> B -> 2
> C -> 3
> // etc
> Z -> 26
> AA -> 27
> AB -> 28
> // etc
> AAA -> 703
> ```

## My solution

At it's core, this is a conversion from base-26 with a custom set of digits to a base-10 number.

{% capture initial %}
{% include /code_kata/a1referencestyle/solution.js %}

{% include /code_kata/a1referencestyle/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=initial -%}
