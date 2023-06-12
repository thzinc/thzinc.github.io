function* trimArray(arrayLike, start, end) {
  let i = 0;
  const fifo = [];
  for (const item of arrayLike) {
    if (i++ < start) continue;
    fifo.push(item);
    if (fifo.length > end) {
      yield fifo.splice(0, 1)[0];
    }
  }
}
