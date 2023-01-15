---
title: sumEveryOther - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #282"
    url: https://buttondown.email/cassidoo/archive/what-you-do-every-day-matters-more-than-what-you/
  - title: Original submitted solution on Codepen
    url: https://codepen.io/thzinc/pen/BaPZvMw?editors=0012
  - title: Social media post
    url: https://onewilshire.la/@thzinc/109686539545245440
---

This was a fun, light interview question this week.

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/what-you-do-every-day-matters-more-than-what-you/)
>
> This week’s question:
> **Given a number, sum every second digit in that number.**
>
> Example:
>
> ```javascript
> > sumEveryOther(548915381)
> > 26 // 4+9+5+8
>
> > sumEveryOther(10)
> > 0
>
> > sumEveryOther(1010.11)
> > 1 // 0+0+1
> ```

## My solution

My first pass at answering this question was to just accomplish the thing quickly and see how well it performs.

{% capture initial %}
{% include /code_kata/sumEveryOther/initial.js %}

{% include /code_kata/sumEveryOther/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=initial -%}

I figured there might be a faster way than using regular expressions and calling `parseInt()` for each qualifying digit, so I took another pass that made use of the UTF-8/ASCII values of the characters in the number string.

{% capture optimized %}
{% include /code_kata/sumEveryOther/optimized.js %}

{% include /code_kata/sumEveryOther/tests.js %}
{% endcapture %}
{%- include codepen.html height=650 markup_type="haml" markup="#mocha" code_type="js" code=optimized -%}

I tested both implementations and included a rudimentary performance test where the function is called 1,000,000 times with random numbers:

{% capture performance %}
{% include /code_kata/sumEveryOther/performance.js %}

// Glue...
function getUnoptimized(){
{% include /code_kata/sumEveryOther/initial.js %}
return sumEveryOther;}
function getOptimized(){
{% include /code_kata/sumEveryOther/optimized.js %}
return sumEveryOther;}
{% endcapture %}
{%- include codepen.html height=800 markup_type="haml" markup="#mocha" code_type="js" code=performance -%}
