function binaryPal(num) {
  const str = num.toString(2);
  for (let s = 0, e = str.length - 1; s < e; s++, e--) {
    if (str[s] !== str[e]) return false;
  }
  return true;
}
