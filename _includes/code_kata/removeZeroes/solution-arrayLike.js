function* removeZeroes(arrayLike) {
  let foundStart = false;
  let zeroCount = 0;
  for (const value of arrayLike) {
    if (!foundStart) {
      if (value === 0) continue;
      foundStart = true;
      yield value;
    } else {
      if (value === 0) {
        zeroCount++;
      } else {
        for (let zc = 0; zc < zeroCount; zc++) {
          yield 0;
        }
        zeroCount = 0;
        yield value;
      }
    }
  }
}
