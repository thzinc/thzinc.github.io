---
title: oddSquareSum - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #299"
    url: https://buttondown.email/cassidoo/archive/6053/
  - title: Social media post
    url: https://onewilshire.la/@thzinc/110337255588877966
---

In this case, writing tests to prove the solution was far more interesting than the solution itself.

TIL that Node did have tail recursion for a brief period, but then removed the feature. I was going to work on a fancy tail recursion implementation that supported memoization, but I wanted to stay in JavaScript for the solution.

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/6053/)
>
> This week’s question:
> **Sum the [odd-square numbers][sequence] less than a given integer `n`.**
>
> Example:
>
> ```
> > oddSquareSum(1)
> > 0
>
> > oddSquareSum(2)
> > 1
>
> > oddSquareSum(9)
> > 1
>
> > oddSquareSum(10)
> > 10
>
> > oddSquareSum(44)
> > 35
> ```

## My solution

This is a simple iterative implementation. Very large numbers could cause undue CPU load, as well as repeated calls for similar values since there's no memoization.

I'm using the first defined value of the [sequence] to short circuit the case when `lim` is equal to (or less than) zero. (i.e., `let n = 0, v = 1;`)

{% capture solution %}
{% include /code_kata/oddSquareSum/solution.js %}
{% include /code_kata/oddSquareSum/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=solution -%}

[sequence]: https://oeis.org/A016754
