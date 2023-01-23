---
title: missingBits - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #284"
    url: https://buttondown.email/cassidoo/archive/the-best-prophet-of-the-future-is-the-past-lord/
# - title: Social media post
#   url: https://onewilshire.la/@thzinc/TBD
---

Nice, bite-sized algorithm question.

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/the-best-prophet-of-the-future-is-the-past-lord/)
>
> This week’s question:
> **You are given a list of positive integers which represents some range of integers which has been truncated. Find the missing bits, insert ellipses to show that that part has been truncated, and print it.** If the consecutive values differ by exactly two, then insert the missing value.
>
> Examples:
>
> ```javascript
> > missingBits([1,2,3,4,20,21,22,23])
> > "[1,2,3,4,...,20,21,22,23]"
>
> > missingBits([1,2,3,5,6])
> > "[1,2,3,4,5,6]"
>
> > missingBits([1,3,20,27])
> > "[1,2,3,...,20,...,27]"
> ```

## My solution

This should be able to be solved in O(n) time by just reading the input array and keeping track of the last element to compare against.

One notable "gotcha" in the given examples is that the result is a string, not a data structure like an array.

{% capture initial %}
{% include /code_kata/missingBits/solution.js %}

{% include /code_kata/missingBits/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=initial -%}
