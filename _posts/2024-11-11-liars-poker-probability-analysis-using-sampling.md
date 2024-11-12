---
packages:
  - id: CsvHelper
    version: 6.0.0
uti: com.xamarin.workbook
id: a680006c-144f-445c-aaaf-75f97e112459
title: Liars’ Poker probability analysis using sampling
platforms:
  - DotNetCore
published_at: https://gist.github.com/thzinc/b282f8b6f3ea2bbcf023476cc40ba314
tags: programming csharp dotnet
excerpt: |
  There’s a game called “Liars’ Poker” that I play frequently with my wife and our gamer friends. It is a bluffing game played with a deck of poker cards and a keen knowledge of standard five-card poker hands. All players in the game start out with two cards in hand. The goal is to call out poker hands that could be made with all cards in play and to avoid getting caught in a bluff.
---

_Originally written in November 2017, but not widely shared._

There’s a game called “Liars’ Poker” that I play frequently with my wife and our gamer friends. It is a bluffing game played with a deck of poker cards and a keen knowledge of standard five-card poker hands. All players in the game start out with two cards in hand. The goal is to call out poker hands that could be made with all cards in play and to avoid getting caught in a bluff. If a player is challenged on their bluff and their poker hand cannot be made from all cards in play, the challenged player takes an additional card for the next round. If the challenged player’s hand can be made, then the challenger takes an additional card. A player may only hold five cards, and if a player would exceed five cards, the player is eliminated. The last player remaining in the game wins.

The poker hands are all standard five-card hands, with the exception of the order of flushes over straights. In Liars’ Poker, a straight beats a flush. As you will see, this is because for some number of rounds, a flush is more likely than a straight.

## Hands

- High card – Called as “jack high” or “seven high”
- Pair – Called as “pair of threes”
- Two pair – Called as “pair of tens, pair of threes”
- Three of a kind – Called as “three sixes”
- Flush – Called as “eight high club flush”
  - To call a flush, a player need only identify a high card and suit. So long as the card is present in play, even if there are higher cards of the called suit, the call is valid.
- Straight – Called as “straight to the ace” or “ten high straight”
- Full house – Called as “tens over jacks” meaning three tens and two jacks
- Four of a kind – Called as “four queens”
- Straight flush – Called as “queen high heart straight flush” or “spade royal flush” if the high card is an ace
- Five of a kind – Called as “five sevens”

## TL;DR

It looks like when there are 10 cards in play, the probabilities for three of a kind, flushes, and straights all converge. However, when there are between 6 and 9 cards in play, the probabilities match standard poker rules, so statistically, it's best to avoid flushes before 10 cards in play.

Also interesting to note, there's almost always a pair among the cards in play, even in a 6-card game.

## Getting started

I’ve chosen to model the cards as a simple class with enum properties for suit and value.

(This uses the [CsvHelper](https://www.nuget.org/packages/CsvHelper) package)

```csharp
using CsvHelper;
using System.IO;
using System.Linq;

[Flags]
enum Suit
{
    Diamonds = 1,
    Clubs = 2,
    Hearts = 4,
    Spades = 8,
    Joker = 16,
}

enum Value {
    Joker = 0,
    Two = 2,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
}

class Card
{
    public Suit Suit {get;set;}
    public Value Value {get;set;}
}
```

## The playing decks

While Liars’ Poker can be played with a standard 52-card deck, I think it’s more fun to play with jokers added. (Jokers are wild cards and can be used as fill-in for any card in a hand.)

Here, we have both a `standardDeck` and a `wildDeck`.

```csharp
var standardDeck = new[]
{
    Suit.Clubs,
    Suit.Diamonds,
    Suit.Hearts,
    Suit.Spades,
}
    .SelectMany(suit => Enum.GetValues(typeof(Value))
        .Cast<Value>()
        .Where(v => v != Value.Joker)
        .Select(value => new Card
        {
            Suit = suit,
            Value = value,
        }))
    .ToList();

var wildDeck = standardDeck
    .Concat(new[]
    {
        new Card
        {
            Suit = Suit.Joker,
            Value = Value.Joker,
        },
        new Card
        {
            Suit = Suit.Joker,
            Value = Value.Ace + 1,
        },
    })
    .ToList();

Console.WriteLine($"Standard deck has {standardDeck.Count} cards and wild deck has {wildDeck.Count} cards.");
```

## Hand evaluators

Each hand will be evaluated by a function that returns a tuple of a success indicator and the best cards that fulfill the hand.

The first is the simple high card. It’s always successful, and returns the highest value card in the set.

```csharp
(bool Success, IEnumerable<Card> Cards) IsHighCard(IEnumerable<Card> cards)
{
    return (true, cards.OrderByDescending(c => c.Value).Take(1));
}
```

This next evaluator is a helper function for pair, three of a kind, and so on. It groups the cards on their value (excluding jokers) and looks for groups that have at least `minSet` cards when the jokers are added back in.

```csharp
(bool Success, IEnumerable<Card> Cards) IsSet(IEnumerable<Card> cards, int minSet)
{
    var byValue = cards.ToLookup(c => c.Value);
    var jokers = byValue[Value.Joker];
    foreach (var @group in byValue
        .Where(g => g.Key != Value.Joker)
        .OrderByDescending(g => g.Key)) {
        var match = @group
            .Concat(jokers)
            .Take(minSet)
            .ToList();
        if (match.Count >= minSet) {
            return (true, match);
        }
    }

    return (false, Enumerable.Empty<Card>());
}
```

Here we’ll use `IsSet()` for all of the set hands.

```csharp
(bool Success, IEnumerable<Card> Cards) IsPair(IEnumerable<Card> cards)
{
    return IsSet(cards, 2);
}

(bool Success, IEnumerable<Card> Cards) IsThreeOfAKind(IEnumerable<Card> cards)
{
    return IsSet(cards, 3);
}

(bool Success, IEnumerable<Card> Cards) IsFourOfAKind(IEnumerable<Card> cards)
{
    return IsSet(cards, 4);
}

(bool Success, IEnumerable<Card> Cards) IsFiveOfAKind(IEnumerable<Card> cards)
{
    return IsSet(cards, 5);
}
```

The two pair hand is a nice place to reuse the `IsPair()` function from above. Find the first pair in the cards, then find another pair in the cards, excluding the successful cards from the first.

```csharp
(bool Success, IEnumerable<Card> Cards) IsTwoPair(IEnumerable<Card> cards)
{
    var first = IsPair(cards);
    if (first.Success) {
        var second = IsPair(cards.Except(first.Cards));
        if (second.Success) {
            return (true, first.Cards.Concat(second.Cards));
        }
    }

    return (false, Enumerable.Empty<Card>());
}
```

The full house function is nearly identical to `IsTwoPair()`.

```csharp
(bool Success, IEnumerable<Card> Cards) IsFullHouse(IEnumerable<Card> cards)
{
    var first = IsPair(cards);
    if (first.Success) {
        var second = IsThreeOfAKind(cards.Except(first.Cards));
        if (second.Success) {
            return (true, first.Cards.Concat(second.Cards));
        }
    }

    return (false, Enumerable.Empty<Card>());
}
```

Determining whether the cards are a flush is done by grouping on suit and looking for groups of five cards (when jokers are added in).

```csharp
(bool Success, IEnumerable<Card> Cards) IsFlush(IEnumerable<Card> cards)
{
    var bySuit = cards.ToLookup(c => c.Suit);
    var jokers = bySuit[Suit.Joker];
    foreach (var @group in bySuit.Where(g => g.Key != Suit.Joker)) {
        var match = @group
            .Concat(jokers)
            .OrderByDescending(c => c.Value)
            .ToList();
        if (match.Count >= 5) {
            return (true, match);
        }
    }

    return (false, Enumerable.Empty<Card>());
}
```

Finding a straight is not so straightforward when handling jokers. The idea here is to iterate through a known sequence of values, looking for the first card that matches each value. Then step through the sequence taking five cards at a time and looking for the required number of cards after jokers are counted. For example, if the cards are:

- King

- Jack

- Ten

- Nine

- Joker

Then this will produce a list with cards in positions 1, 3, 4, and 5 of the list. Because there’s one joker, four cards are required for this straight. When we step through the sequence starting at index 0, taking 5 values, there will only be cards from indexes 1, 3, and 4. Not enough cards. Starting at index 1, taking 5 values, there will be cards from indexes 1, 3, 4, and 5. This will satisfy the required number of cards.

```csharp
(bool Success, IEnumerable<Card> Cards) IsStraight(IEnumerable<Card> cards)
{
    var byValue = cards.ToLookup(c => c.Value);
    var jokers = byValue[Value.Joker].ToList();
    var seq = new[]
    {
        Value.Ace,
        Value.King,
        Value.Queen,
        Value.Jack,
        Value.Ten,
        Value.Nine,
        Value.Eight,
        Value.Seven,
        Value.Six,
        Value.Five,
        Value.Four,
        Value.Three,
        Value.Two,
        Value.Ace,
    };
    var matches = seq
        .Select(v => byValue[v].FirstOrDefault())
        .ToList();
    var requiredCards = 5 - jokers.Count;
    var match = Enumerable.Range(0, 10)
        .Select(skip => matches
            .Skip(skip)
            .Take(5)
            .ToList())
        .FirstOrDefault(m => m.Count(c => c != null) >= requiredCards);
    if (match != null)
    {
        return (true, match
            .Where(c => c != null)
            .Concat(jokers).ToList());
    }

    return (false, Enumerable.Empty<Card>());
}
```

The straight flush is a combination of the two hands already defined above.

```csharp
(bool Success, IEnumerable<Card> Cards) IsStraightFlush(IEnumerable<Card> cards)
{
    var straight = IsStraight(cards);
    if (straight.Success) {
        var byValue = straight.Cards.ToLookup(c => c.Value);
        var jokers = byValue[Value.Joker].ToList();
        var match = cards
            .Where(c => byValue[c.Value].Any())
            .GroupBy(c => c.Suit)
            .Where(g => g.Count() >= 5 - jokers.Count)
            .Take(1)
            .SelectMany(g => g);
        if (match.Any()) {
            return (true, match.Concat(jokers));
        }
    }

    return (false, Enumerable.Empty<Card>());
}
```

Finally, the hand evaluators are put into a collection for use in iterating over them for each game sampled.

```csharp
var hands = new Dictionary<string, Func<IEnumerable<Card>, (bool Success, IEnumerable<Card> Cards)>> {
    { "A. High Card", IsHighCard },
    { "B. Pair", IsPair },
    { "C. Two Pair", IsTwoPair },
    { "D. Three of a Kind", IsThreeOfAKind },
    { "E. Flush", IsFlush },
    { "F. Straight", IsStraight },
    { "G. Full House", IsFullHouse },
    { "H. Four of a Kind", IsFourOfAKind },
    { "I. Straight Flush", IsStraightFlush },
    { "J. Five of a Kind", IsFiveOfAKind },
};
```

The function to find the probabilities runs through a specified number of mock games, “shuffling” the deck of cards each time.

```csharp
IEnumerable<(string Deck, int CardsPerGame, string Hand, double Probability)> SampleProbability(IEnumerable<Card> deck, int samples, int minCardsPerGame, int maxCardsPerGame)
{
    var deckName = $"{deck.Count()}-card deck";
    return Enumerable.Range(minCardsPerGame, maxCardsPerGame - minCardsPerGame + 1)
        .SelectMany(cardsPerGame => Enumerable.Range(0, samples)
            .Select(i => deck.OrderBy(_ => Guid.NewGuid()).ToList())
            .Select(shuffled => shuffled.Take(cardsPerGame).ToList())
            .SelectMany(game => hands
                .Select(x => new {
                    Hand = x.Key,
                    Result = x.Value(game).Success,
                }))
            .GroupBy(x => x.Hand)
            .Select(g => new
            {
                Hand = g.Key,
                Count = g.Count(x => x.Result),
            })
            .Select(x => (
                deckName,
                cardsPerGame,
                x.Hand,
                x.Count / (double)samples
            )));
}
```

Here, we’ll play 10,000 games with 6 players and an additional “middle” hand for added variability.

The minimum number of cards in a game is always two players’ starting hands. (In large games, if a player can make it late into the game with only two cards in hand, they are generally quite good or quite lucky.)

```csharp
var numberOfGames = 10000;
var players = 6;
var middleHands = 1;
var minCardsPerGame = 2 * (2 + middleHands);
var maxCardsPerGame = 5 * (players + middleHands);

var wildProbabilities = SampleProbability(wildDeck, numberOfGames, minCardsPerGame, maxCardsPerGame).ToList();
var standardProbabilities = SampleProbability(standardDeck, numberOfGames, minCardsPerGame, maxCardsPerGame).ToList();
```

Finally, write out the results to a CSV file.

```csharp
using (var stream = File.Create(@"./Liars Poker Analysis.csv"))
using (var textWriter = new StreamWriter(stream))
using (var writer = new CsvWriter(textWriter))
{
    var results = wildProbabilities.Concat(standardProbabilities);
    foreach (var result in results)
    {
        writer.NextRecord();
        writer.WriteField(result.Deck);
        writer.WriteField(result.CardsPerGame);
        writer.WriteField(result.Hand);
        writer.WriteField(result.Probability);
    }
}
```
