---
title: Straight-up JavaScript – Array.prototype.some() and Array.prototype.every()
tags: programming javascript
published_at: https://blog.thzinc.com/post/78255510674/straight-up-javascript-arrayprototypesome
---

“I just want to know if there’s anything in this array.”

“Do any of the strings in my array start with ‘q’?”

“How can I be sure all of the objects in my array have a “width” property of 10?”

These are the types of questions [`Array.prototype.some()`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/some) and [`Array.prototype.every()`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/every) can ans–wait, this seems familiar. It’s true that [.NET’s LINQ class library offers this functionality in .Any() and .All()][any-and-all]. But JavaScript can do the same thing, albeit with different method names. And no need for jQuery either, it’s part of JavaScript 1.6!

Now, there are a couple of minor differences: `Array.prototype.some()` does not have a method signature that allows for no argument to be passed like LINQ’s `.Any()`. So instead of `objects.some()`, you’ll need to write something like `objects.some(function() { return true; })`:

```javascript
var objects = [
  { foo: "Fluffy", bar: "bunnies" },
  { foo: "Soft", bar: "puppies" },
];

if (
  objects.some(function () {
    return true;
  })
) {
  console.log("Thar be objects!");
} else {
  console.log("Thar be no objects in ye array");
}
```

It should be obvious that you could specify any criteria in the function. The first argument passed to the function called from `Array.prototype.some()` is the element of the array being evaluated. (The second is the element’s index in the array.)

```javascript
var strings = ["Johnny", "loves", "quilting"];

if (
  strings.some(function (s) {
    return /^q/.test(s);
  })
) {
  console.log("There's at least one word that starts with 'q'");
} else {
  console.log("Life is dull because none of your words start with 'q'");
}
```

Similarly, the `Array.prototype.every()` method evaluates all of the members of the array, just like LINQ’s `.All()` method.

```javascript
var rectangles = [
  { width: 10, height: 20 },
  { width: 10, height: 30 },
  { width: 10, height: 40 },
];

if (
  rectangles.every(function (r) {
    return r.width == 10;
  })
) {
  console.log("All rectangles have a uniform width of 10");
} else {
  console.log(
    "The world is in chaos because not all rectangles are the same width!"
  );
}
```

[any-and-all]: {% post_url 2012-04-18-think-linq-any-and-all %}
