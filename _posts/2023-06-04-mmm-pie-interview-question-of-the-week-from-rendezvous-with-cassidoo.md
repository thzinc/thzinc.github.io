---
title: mmmPie - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #303"
    url: https://buttondown.email/cassidoo/archive/8309/
  - title: Social media post
    url:
---

How can I write a piece of code that can be written quickly and trivially understood? I think it's mostly good variable names in this case. (And I handle infinite pie!)

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/8309/)
>
> This week’s question:
> **Given an array of people objects (where each person has a name and a number of pie pieces they’re hungry for) and a number for the number of pieces that the pie can be cut into, return the number of pies you need to buy.**
>
> Example:
>
> ```
> > arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
> > mmmPie(arr, 8)
> > 2 // 16 pieces needed, pies can be cut into 8 pieces, so 2 pies should be bought
> ```

## My solution

_Written as a stream of consciousness_

Tonight, I'm going for minimal human effort to both write and read this code. The example employs a classic "word problem" feint: at no point is the `name` relevant to the result of `mmmPie()`.

As far as readability is concerned, I am going to suppress my inner urge to use `.reduce()` and just write a `for..of` loop instead.

With any division where the divisor is supplied by the implementer, I'm including a check for zero, as well as a check for negative numbers because we're not dealing with imaginary pie. However, technically I will allow both real and negative slices needed (i.e., `num` may be a fraction and also `num` may be negative) because we're treating the array of `people` as an accounting of what is desired. I will add a check to ensure that the `totalSlicesNeeded` is a positive number, because the result of this function should still be a value that is 0..infinity. (mmm... infinity pie...)

{% capture solution %}
{% include /code_kata/mmmPie/solution.js %}
{% include /code_kata/mmmPie/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=solution -%}

Hah, after trying to assert my 0..infinity claim, I found that I'll need an explicit check for when `slicesPerPie` is infinity to return exactly one pie, which has infinity slices.
