---
title: maximumProfit - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #310"
    url: https://buttondown.email/cassidoo/archive/the-thermometer-of-success-is-merely-the-jealousy/
  - title: Social media post
    url:
---

If I'm going to use Elixir, I might as well make use of its pattern matching!

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/the-thermometer-of-success-is-merely-the-jealousy/)
>
> This week's question:
> **Given an array where each element is the price of a given stock on that index's day, choose a single day to buy a stock and a different day (in the future/later in the array) to sell the stock to maximize your profit.** Return the maximum profit that you can get from a given input. If you can't profit, return 0.
>
> Example:
>
> ```
> > maximumProfit([7,1,5,3,6,4])
> > 5 // Buy on day 2, and sell on day 5, your profit = 6-1 = 5.
> ```

## My solution

This kind of problem is a really nice case for recursion. The core idea is to build a series of permutations while iterating through each element of the input. Making use of linked list terminology ("head" for the first element in the input and "tail" for any elements after the first in the input) helps to clarify how the elements of the input are evaluated.

In this implementation, `build_permutations/2` can return an array of results depending on whether the head is more or less than the lowest observed value in a series of permutations. When the tail no longer has any elements in it, the function returns an array with just the state it was given.

```elixir
defmodule CodeKata do
  def maximum_profit([head | tail]) do
    build_permutations(%{min: head, diff: 0}, tail)
    |> Stream.map(& &1.diff)
    |> Enum.max()
  end

  defp build_permutations(%{min: min} = state, [head | tail]) do
    if(head < min,
      do: build_permutations(%{min: head, diff: 0}, tail),
      else: []
    ) ++
      if(head > min,
        do: build_permutations(%{min: min, diff: head - min}, tail),
        else: []
      ) ++
      build_permutations(state, tail)
  end

  defp build_permutations(state, []) do
    [state]
  end
end
```
