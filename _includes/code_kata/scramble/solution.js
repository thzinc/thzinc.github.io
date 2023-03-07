function scramble(input = []) {
  return input.join(" ").replace(/\w+/g, (word) => {
    if (word.length < 4) return word;

    const first = word.slice(0, 1);
    const middle = Array.from(word.slice(1, -1));
    middle.sort(() => Math.random() * 2 - 1);
    const last = word.slice(-1);

    return [first, ...middle, last].join("");
  });
}
