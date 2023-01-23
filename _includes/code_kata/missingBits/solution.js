function missingBits(input = []) {
  const result = [];

  let prev = null;
  for (const curr of input) {
    if (prev === null) {
      prev = curr;
      result.push(curr);
      continue;
    }

    switch (curr) {
      case prev + 1:
        result.push(curr);
        break;
      case prev + 2:
        result.push(prev + 1, curr);
        break;
      default:
        result.push("...", curr);
    }

    prev = curr;
  }

  return `[${result.join(",")}]`;
}
