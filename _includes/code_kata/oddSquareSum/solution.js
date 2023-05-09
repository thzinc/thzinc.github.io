function oddSquareSum(lim) {
  let acc = 0;
  for (let n = 0, v = 1; v < lim; v = oddSquare(++n)) {
    acc += v;
  }
  return acc;
}

function oddSquare(n) {
  //	Odd squares: a(n) = (2n+1)^2
  return (2 * n + 1) ** 2;
}
