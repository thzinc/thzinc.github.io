---
title: isIsomorphic - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #322"
    url: https://buttondown.email/cassidoo/archive/no-matter-what-people-tell-you-words-and-ideas/
  - title: Social media post
    url:
---

Wow, I haven't done one of these for a few months. Let's see how this goes!

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/no-matter-what-people-tell-you-words-and-ideas/)
>
> This week's question:
> **Given two strings `s` and `t`, determine if they are isomorphic.** Two strings are isomorphic if there is a one-to-one mapping possible for every character of the first string to every character of the second string.
>
> Example:
>
> ```
> > isIsomorphic('abb', 'cdd')
> > true // 'a' maps to 'c' and 'b' maps to 'd'
>
> > isIsomorphic('cassidy', '1234567')
> > false // 's' cannot have a mapping to both '3' and '4'
>
> > isIsomorphic('cass', '1233')
> > true
> ```

## My solution

Off the top of my head, I think this can be solved in roughly O(n) if I keep a mapping of observed characters along the way. I should be able to exit early if I encounter a new mapping that doesn't match a previously-observed mapping.

{% capture initial %}
{% include /code_kata/isIsomorphic/solution.js %}

{% include /code_kata/isIsomorphic/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=initial -%}
