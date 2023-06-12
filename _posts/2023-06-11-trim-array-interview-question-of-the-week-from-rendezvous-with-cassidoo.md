---
title: trimArray - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #304"
    url: https://buttondown.email/cassidoo/archive/5922/
  - title: Social media post
    url: https://botsin.space/@thzinc/110529722446966363
---

There's a really simple one-liner for arrays, but what about using this with generators? (i.e., the [iterator] pattern where a length is not known until reaching the end of the iteration)

[iterator]: https://en.wikipedia.org/wiki/Iterator_pattern

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/5922/)
>
> This week’s question:
> **Given an array `arr` and integers `n` and `m`, remove `n` elements from the front of the array, and `m` elements from the back.** Assume that `n + m <= arr.length`.
>
> Example:
>
> ```javascript
> > trimArray([1, 2, 3, 4, 5, 6], 2, 1)
> > [3, 4, 5]
>
> > trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0)
> > [1, 3]
>
> > trimArray([1, 7], 0, 0)
> > [1, 7]
> ```

## My solution

_Written as a stream of consciousness_

First, the one-liner:

{% capture solution %}
{% include /code_kata/trimArray/solution-simple.js %}
{% include /code_kata/trimArray/tests-simple.js %}
mocha.run();
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=solution -%}

Now, let's deal with a generator. To deal with the `start` argument, we'll iterate that many times over the generator. Then to deal with the `end` argument, we'll need to keep a queue of items that is `end`-sized and only `yield` results that exceed the size of the queue. I'm pretty sure I can use [`Array#splice()`][mdn-splice] to do this with one nice function call.

[mdn-splice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

{% capture solution %}
{% include /code_kata/trimArray/solution-complex.js %}
{% include /code_kata/trimArray/tests-simple.js %}
{% include /code_kata/trimArray/tests-complex.js %}
mocha.run();
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=solution -%}

Yay! Splice works like I thought it would! This solution will only ever hold `end` + 1 elements in memory, which means that when iterating over a very large dataset (especially one where the length is not known ahead of iteration), it will outperform the simple solution in terms of memory use.
