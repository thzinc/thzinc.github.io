---
title: explodeString - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #309"
    url: https://buttondown.email/cassidoo/archive/forgiveness-is-giving-up-the-hope-that-the-past/
  - title: Social media post
    url: https://botsin.space/@thzinc/110742408259448419
---

I'm doing some work in Elixir now, so I figure I'd take a shot at this week's question with Elixir.

[iterator]: https://en.wikipedia.org/wiki/Iterator_pattern

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/forgiveness-is-giving-up-the-hope-that-the-past/)
>
> This week's question:
> **Given a string, separate it into groups of non-space equal characters, sorted.**
>
> Example:
>
> ```
> > explodeString('Ahh, abracadabra!')
> > ['!',',','A','aaaaa','bb','c','d','hh','rr']
>
> > explodeString('\o/\o/')
> > ['//','\\','oo']
> ```

## My solution

My solution is still what I'd expect it to look like in any other language with a reasonable collections API. The [Map.update/4](https://hexdocs.pm/elixir/1.6.1/Map.html#update/4) is a nice signature for handling both new keys as well as existing keys.

```elixir
defmodule Example do
    def explode_string(str) do
        str
        |> String.replace(~r/\s+/, "")
        |> String.to_charlist()
        |> Enum.reduce(%{}, fn c, m ->
            Map.update(m, c, [c], fn a ->
                [c | a]
            end)
        end)
        |> Map.values()
        |> Enum.sort()
    end
end
```
