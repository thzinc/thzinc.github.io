---
title: seeBuildingsLeft – Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #378"
    url: https://buttondown.com/cassidoo/archive/stand-for-something-or-you-will-fall-for-anything/
  - title: Social media post
    url: https://hachyderm.io/@thzinc/113472721202601421
---

I love a good use case for a reducer. Also, <abbr title="today I learned">TIL</abbr> that [`reducer` support on JavaScript `Iterator`s is available in the very newest browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/reduce).

> ## Interview question of the week
>
> This week's question:
> **Given a list of integers representing the heights of buildings, return the maximum number of buildings that can be seen when looking from the left. A building can see another building if it is taller than all the buildings to its left.** The height of the tallest building is included in the count.
>
> Examples:
>
> ```
> seeBuildingsLeft([1,2,3,4,5])
> 5
>
> seeBuildingsLeft([5,4,3,2,1])
> 1
>
> seeBuildingsLeft([3,7,8,3,6,1])
> 3
> ```

{% capture solution %}
{% include /code_kata/seeBuildingsLeft/solution.js %}
{% include /code_kata/seeBuildingsLeft/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=solution -%}
