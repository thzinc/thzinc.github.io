---
title: removeZeroes - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #298"
    url: https://buttondown.email/cassidoo/archive/5528/
  - title: Social media post
    url: https://onewilshire.la/@thzinc/110296329640075443
---

The simple case wasn't hard, but the low-memory iterator pattern was a fun, self-imposed challenge.

> ## Interview question of the week
>
> This week’s question:
> **Given a non-empty array containing only non-negative integers, return the list with trailing and leading zeroes removed.**
>
> Example:
>
> ```javascript
> > removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0])
> > [3, 1, 4, 1, 5, 9]
>
> > removeZeroes([0, 0, 0])
> > []
>
> > removeZeroes([8])
> > [8]
> ```

## My solution

_Written as a stream of consciousness_

My first thought is that if data is given as an array and the array is already fully in memory, the easiest solution is to iterate through the head and the tail of the array to find the indices of the first and last nonzero values. Since JavaScript's `Array` type includes `findIndex` and `findLastIndex`, this becomes a pretty trivial call:

{% capture array %}
{% include /code_kata/removeZeroes/solution-array.js %}

{% include /code_kata/removeZeroes/tests-import.js %}
{% include /code_kata/removeZeroes/tests-array.js %}
{% include /code_kata/removeZeroes/tests-run.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=array -%}

However, if the input data is very large and we're concerned about allocating a lot of space to memory, using the affordances of the iterator pattern would be beneficial. (i.e., JavaScript generators) Because we'll be reading the input one at a time, the best we can do is operate in `O(n)` time, but we'll keep the impact of the stuff in memory low.

At the start, we'll iterate through the input until we find a nonzero value and yield it. After that point, if we encounter any zero value, we'll start counting consecutive zeros. If after starting the count, we encounter a nonzero value, we'll yield a number of zeros equal to the count, reset the count, then yield the nonzero value. We'll repeat this logic until the end of the input.

{% capture arrayLike %}
{% include /code_kata/removeZeroes/solution-arrayLike.js %}

{% include /code_kata/removeZeroes/tests-import.js %}
{% include /code_kata/removeZeroes/tests-arrayLike.js %}
{% include /code_kata/removeZeroes/tests-array.js %}
{% include /code_kata/removeZeroes/tests-run.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=arrayLike -%}
