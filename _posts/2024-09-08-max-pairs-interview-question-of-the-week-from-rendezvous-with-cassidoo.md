---
title: maxPairs - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #368"
    url: https://buttondown.com/cassidoo/archive/to-lead-people-walk-behind-them-lao-tzu/
  - title: Social media post
    url: https://botsin.space/@thzinc/113104858393534145
---

I needed something to focus on for a bit and I already used up the free puzzles on the NYTimes app.

> ## [Interview question of the week](https://buttondown.com/cassidoo/archive/to-lead-people-walk-behind-them-lao-tzu/)
>
> This week's question:
>
> You are given an array of strings representing a collection of shoes. Each shoe is labeled with its type ("L" for left or "R" for right) and its size. Determine the maximum number of matching pairs of shoes that can be formed.
>
> Example:
>
> ```
> > maxPairs(["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"])
> > 3
>
> > maxPairs(["L-10", "L-11", "L-12", "L-13"])
> > 0
>
> > maxPairs(["L-8", "L-8", "L-8", "R-8"])
> > 1
> ```

## My solution

I think if I represent the left and right shoes as `-1` and `+1` values, I can use a map keyed by the shoe size to determine whether I have a pair.

{% capture initial -%}
{% include /code_kata/maxPairs/solution.js %}

{% include /code_kata/maxPairs/tests.js %}
{%- endcapture -%}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=initial -%}

Looks like that works!
