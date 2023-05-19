---
title: binaryPal - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #300"
    url: https://buttondown.email/cassidoo/archive/1545/
  - title: Social media post
    url:
---

What's faster: a typical JavaScript implementation of `.toString()` and some basic string manipulation or clever bit shifting? (TL;DR: It's bit shifting, but it's uglier code.)

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/1545/)
>
> This week’s question:
> **Write a function to find out whether the binary representation of a number is palindrome or not.**
>
> Example:
>
> ```
> > binaryPal(5)
> > true
>
> > binaryPal(10)
> > false
> ```

## My solution

_Written as a stream of consciousness_

I'll try to solve this as a string problem first. I know I can use the `.toString(number)` method to pretty efficiently translate a number into a base-2 string representation.

{% capture stringSolution %}
{% include /code_kata/binaryPal/stringSolution.js %}
{% include /code_kata/binaryPal/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=stringSolution -%}

The string solution feels reasonably easy to read, and there's nothing that stands out as particularly inefficient, except that each bit of memory used for `num` was multiplied by 8 to represent the number as a string of utf-8 characters.

ED: I was thinking along the following lines, but then got hung up on how to mathematically reverse the digits in a number without iterating for at least half the number of digits.

> After plinking around in the programmer calculator mode, I think there's a way to accomplish this without iterating over the digits.
>
> First problem to solve: calculate the number of significant digits in the number. A quick search turned up [Number of Bits in a Decimal Integer](https://www.exploringbinary.com/number-of-bits-in-a-decimal-integer/), which boils down to `Math.ceil((Math.log(num)/Math.log(2)))`
>
> Second problem to solve: how to reverse a sequence of bits.

So, if I'm still going to iterate over digits, what does that look like with bit shifting?

{% capture bitShiftSolution %}
{% include /code_kata/binaryPal/bitShiftSolution.js %}
{% include /code_kata/binaryPal/tests.js %}
{% endcapture %}
{%- include codepen.html markup_type="haml" markup="#mocha" code_type="js" code=bitShiftSolution -%}

After explicitly handling negative numbers and zero and one, I'm taking the approach of shifting one off of `dec` and building up `acc` from left to right, then seeing if they're equal OR if they're equal after shifting one more bit off of `dec`. (This handles odd numbers of digits because the digit in the middle of a palindrome doesn't change the outcome of the result.)

So, is one of these faster than the other?

{% capture performance %}
{% include /code_kata/binaryPal/performance.js %}

// Glue...
function getStringImpl(){
{% include /code_kata/binaryPal/stringSolution.js %}
return binaryPal;}
function getBitShiftImpl(){
{% include /code_kata/binaryPal/bitShiftSolution.js %}
return binaryPal;}
{% endcapture %}
{% capture markup%}
#mocha
#results
{% endcapture %}
{%- include codepen.html height=800 markup_type="haml" markup=markup code_type="js" code=performance -%}

Seems like bit shifting is faster by 7-8 times running in a browser on my computer. Sample output:

> - string-based implementation: 799 ms over 1000000 invocations
> - bit shift-based implementation: 109 ms over 1000000 invocations

My bit shifting implementation is definitely not as readable or as easy to translate back to the original prompt, but that's usually the tradeoff when optimizing code.
