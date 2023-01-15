---
title: rectangleSum - Interview question of the week from rendezvous with cassidoo
tags: programming code_kata
see_also:
  - title: "rendezvous with cassidoo #278"
    url: https://buttondown.email/cassidoo/archive/life-has-no-blessing-like-a-prudent-friend/
  - title: Submitted solution on Codepen
    url: https://codepen.io/thzinc/pen/ZERNRXV?editors=0012
  - title: Social media post
    url: https://onewilshire.la/@thzinc/109505132671041800
---

This one was tricky to stay mindful of the number of iterations.

> ## [Interview question of the week](https://buttondown.email/cassidoo/archive/life-has-no-blessing-like-a-prudent-friend/)
>
> This week’s question:
> **Given a 2D array `n` of integers, and an array `m` of four (4) coordinates that represent corners of a rectangle in `n`, return the sum of all of the numbers in the rectangle.**
>
> Example:
>
> ```
> n = [6,  9, -7,  3,
>      8, -1, -6, -4,
>      2, -7,  7, -7,
>     -1,  4,  7,  9]
>
> m = [-1, 8, -7, 2]
>
> > rectangleSum(n, m)
> > 2
> > rectangleSum(n, [6, 3, 2, -7])
> > 3
> ```

## My solution

```javascript
/**
 * Returns the sum of all of the numbers n in the rectangle m
 * @param {Array<number>} n Array of numbers assumed to represent a square 2D matrix (equal rows and columns)
 * @param {Array<number>} m Array of four numbers existing in m that represent a rectangle
 * @returns {number} sum of all numbers n in rectangle m; null if rectangle m could not be found
 */
function rectangleSum(n, m) {
  const nSide = Math.sqrt(n.length);
  const [a, b, c, d] = m;

  const indices = {
    a: [],
    b: [],
    c: [],
    d: [],
  };

  n.forEach((v, i) => {
    let acc;
    if (v === a) {
      acc = indices.a;
    } else if (v === b) {
      acc = indices.b;
    } else if (v === c) {
      acc = indices.c;
    } else if (v === d) {
      acc = indices.d;
    } else {
      return;
    }

    acc.push({
      x: i % nSide,
      y: Math.floor(i / nSide),
    });
  });

  function getBounds(...corners) {
    let xMin = nSide;
    let yMin = nSide;
    let xMax = 0;
    let yMax = 0;
    for (const { x, y } of corners) {
      xMin = Math.min(xMin, x);
      xMax = Math.max(xMax, x);
      yMin = Math.min(yMin, y);
      yMax = Math.max(yMax, y);
    }

    return {
      xMin,
      xMax,
      yMin,
      yMax,
      area: (xMax - xMin) * (yMax - yMin),
    };
  }
  const validBounds = [];
  for (const a of indices.a) {
    for (const b of indices.b) {
      for (const c of indices.c) {
        for (const d of indices.d) {
          if (a.x === b.x) {
            if (a.y === c.y) {
              if (b.y === d.y) {
                validBounds.push(getBounds(a, b, c, d));
              }
            } else if (b.y === c.y) {
              if (a.y === d.y) {
                validBounds.push(getBounds(a, b, c, d));
              }
            }
          } else if (a.y === b.y) {
            if (a.x === c.x) {
              if (b.x === d.x) {
                validBounds.push(getBounds(a, b, c, d));
              }
            } else if (b.x === c.x) {
              if (a.x === d.x) {
                validBounds.push(getBounds(a, b, c, d));
              }
            }
          } else {
            if (a.x === c.x && b.y === c.y) {
              if (b.x === d.x && a.y === d.y) {
                validBounds.push(getBounds(a, b, c, d));
              }
            } else if (b.x === c.x && a.y === c.y) {
              if (a.x === d.x && b.y === d.y) {
                validBounds.push(getBounds(a, b, c, d));
              }
            }
          }
        }
      }
    }
  }

  if (validBounds.length === 0) return null;

  validBounds.sort(
    (a, b) => -(a.area === b.area ? 0 : a.area < b.area ? -1 : 1) // Descending sort
  );

  const [bounds] = validBounds;
  let result = 0;
  for (let x = bounds.xMin; x <= bounds.xMax; x++) {
    for (let y = bounds.yMin; y <= bounds.yMax; y++) {
      const i = y * nSide + x;
      result += n[i];
    }
  }

  return result;
}

const n = [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9];

console.log(
  "rectangleSum(n, [-1, 8, -7, 2]) should be 2: ",
  rectangleSum(n, [-1, 8, -7, 2])
);
console.log(
  "rectangleSum(n, [6, 3, 2, -7]) should be 3: ",
  rectangleSum(n, [6, 3, 2, -7])
);

// Extra tests
console.log(
  "rectangleSum(n, [8, -7, -1, 2]) should be 2: ",
  rectangleSum(n, [8, -7, -1, 2])
);
console.log(
  "rectangleSum(n, [8, -7, 2, -1]) should be 2: ",
  rectangleSum(n, [8, -7, 2, -1])
);
console.log(
  "rectangleSum([9, -7, 2, 1], [8, -7, 2, -1]) should be null: ",
  rectangleSum([9, -7, 2, 1], [8, -7, 2, -1])
);
```
