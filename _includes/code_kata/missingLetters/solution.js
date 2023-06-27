function missingLetters(arr) {
  if (arr.length <= 1) return [];

  let [head, ...tail] = arr;
  let prev = head.charCodeAt(0);

  const result = [];
  for (const item of tail) {
    const curr = item.charCodeAt(0);
    for (let i = 1; i < curr - prev; i++) {
      result.push(String.fromCharCode(prev + i));
    }
    prev = curr;
  }
  return result;
}
