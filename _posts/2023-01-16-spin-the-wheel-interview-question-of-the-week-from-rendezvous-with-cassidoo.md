---
title: Spin the Wheel - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #283"
    url: https://buttondown.email/cassidoo/archive/the-man-who-moves-a-mountain-begins-by-carrying/
  - title: Social media post
    url: https://onewilshire.la/@thzinc/109703329217382401
---

Well, I spent quite a bit more time on this tonight than I'd originally anticipated. It's not _pretty_, but it does work and has a little bit of viable game theory.

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/the-man-who-moves-a-mountain-begins-by-carrying/)
>
> This week’s question:
> **Implement a “spin the wheel” game where the player can bet on each spin of a wheel and either double their money, lose their money, or keep their money.** You can choose how the user bets, and what data structures you might want to use for the player and their money!

## My solution

Since there's a lot of creative space left for me, I'm going to break the game down into a few key elements:

1. A player has a **balance** of currency.
2. A player can place a **bet** up to their **balance**; placing a bet deducts the amount from the balance
3. A **bet** can have three possible **outcomes**:
   1. **Win**: the player's **balance** is incremented `2*(bet)`
   2. **Draw**: the player's **balance** is incremented `1*(bet)`
   3. **Lose**: the player's **balance** is unchanged
4. A player can request a **loan** from the **banker**
5. If the **loan balance** is greater than zero
   1. A **loan balance** is increased by 2% for every bet
   2. A player can transfer an amount `0 < n < (loan balance)` from **balance** to the **loan balance**
6. Upon placing a **bet**, the **wheel** will spin for a short period of time and before choosing a randomly-selected **outcome**
7. A player has a **standing**, which is `(balance)-(loan balance)`

{% capture prefill %}
{% include /code_kata/spinTheWheel/codepen_prefill.json %}
{% endcapture %}
{% capture markup %}
{% include /code_kata/spinTheWheel/markup.html %}
{% endcapture %}
{% capture styles %}
{% include /code_kata/spinTheWheel/styles.css %}
{% endcapture %}
{% capture code %}
{% include /code_kata/spinTheWheel/top.js %}
{% include /code_kata/spinTheWheel/Game.js %}
{% include /code_kata/spinTheWheel/Balance.js %}
{% include /code_kata/spinTheWheel/Standing.js %}
{% include /code_kata/spinTheWheel/Bet.js %}
{% include /code_kata/spinTheWheel/Wheel.js %}
{% include /code_kata/spinTheWheel/Outcome.js %}
{% include /code_kata/spinTheWheel/Banker.js %}
{% include /code_kata/spinTheWheel/bottom.js %}
{% endcapture %}
{%- include codepen.html prefill=prefill markup_type="html" markup=markup styles_type="css" styles=styles code_type="babel" code=code default_tab="results" height=700 -%}

All of the rules of the game are contained in `<Game/>`. Particularly, `borrow()`, `placeBet()`, and `wheelStopped()`. This component is responsible for feeding data into the other components to display to the player.

{% capture game %}
{% include /code_kata/spinTheWheel/Game.js %}
{% endcapture %}
{%- include codepen.html prefill=prefill code_type="babel" code=game default_tab="js" -%}

The `<Balance/>` and `<Standing/>` components are very simple displays of the numbers they're given.

{% capture balance_standing %}
{% include /code_kata/spinTheWheel/Balance.js %}
{% include /code_kata/spinTheWheel/Standing.js %}
{% endcapture %}
{%- include codepen.html prefill=prefill code_type="babel" code=balance_standing default_tab="js" -%}

The betting interactions happen among the `<Bet/>`, `<Wheel/>`, and `<Outcome/>`.

{% capture bet_wheel_outcome %}
{% include /code_kata/spinTheWheel/Bet.js %}
{% include /code_kata/spinTheWheel/Wheel.js %}
{% include /code_kata/spinTheWheel/Outcome.js %}
{% endcapture %}
{%- include codepen.html prefill=prefill code_type="babel" code=bet_wheel_outcome default_tab="js" -%}

And finally, the interaction with the `<Banker/>` gives the player the leverage to start betting. (Whether that's a good idea is left entirely to the player…)

{% capture banker %}
{% include /code_kata/spinTheWheel/Banker.js %}
{% endcapture %}
{%- include codepen.html prefill=prefill code_type="babel" code=banker default_tab="js" -%}
