---
title: scramble - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #290"
    url: https://buttondown.email/cassidoo/archive/you-should-celebrate-who-you-are-eva-mendes/
  - title: Social media post
    url: https://onewilshire.la/@thzinc/109980712185344430
---

The tests were harder than the implementation 🥴

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/you-should-celebrate-who-you-are-eva-mendes/)
>
> This week’s question (thanks Tom!):
> **If you mix up the order of letters in a word, many people can slitl raed and urenadnstd tehm. Write a function that takes an input sentence, and mixes up the insides of words (anything longer than 3 letters).**
>
> Example:
>
> ```
> > scramble(["A quick brown fox jumped over the lazy dog."])
> > "A qciuk bwron fox jmepud oevr the lzay dog."
> ```

## My solution

_Written as a stream of consciousness_

Upon looking at the inputs, it's interesting to note that the argument to `scramble()` is an array of strings, but the result is a single string. Looks like I'll have to make a decision about how to handle an input array of arbitrary length: I'll join the elements of the array with a space. e.g.:

```
> scramble([
  "A quick brown fox jumped over the lazy dog.",
  "There is a snake in my boots.",
])
> "A qciuk bwron fox jmepud oevr the lzay dog. Trehe is a sknae in my botos."
```

Now, I think the tests will actually be more challenging than the implementation of `scramble()`. I'll need to assert the starting and ending characters match, and then the matching characters in between in any order.

I'll base my word handling on the regular expression "word character" class (`\w`) and use `String.prototype.matchAll()` to return an iterable of results of each word in the string.

Comparing the first and last letters of a word is easy enough, but I think for the middles, I'll sort the characters in the string and compare the sorted results.

I remembered seeing punctuation in the output, so I'll resort to using `String.prototype.replace()` with the signature that uses a replacer function in my `scramble()` implementation.

{% capture initial %}
{% include /code_kata/scramble/solution.js %}

{% include /code_kata/scramble/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=initial -%}
