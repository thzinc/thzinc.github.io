function removeZeroes(input = []) {
  return input.slice(
    input.findIndex((n) => n !== 0),
    input.findLastIndex((n) => n !== 0) + 1
  );
}
