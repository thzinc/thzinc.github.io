function maxPairs(shoes = []) {
  const sizes = new Map();
  let pairs = 0;
  for (const shoe of shoes) {
    const [side, size] = shoe.split("-");
    const value = side === "L" ? -1 : 1;
    const prev = sizes.get(size) || 0;
    let curr = prev + value;
    if (Math.abs(curr) < Math.abs(prev)) {
      pairs += 1;
    }

    sizes.set(size, curr);
  }
  return pairs;
}
