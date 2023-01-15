const ZERO_CHAR_CODE = "0".charCodeAt(0);
const NINE_CHAR_CODE = "9".charCodeAt(0);
function sumEveryOther(num) {
  const str = num.toString();
  let acc = 0;
  let skip = true;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c < ZERO_CHAR_CODE || NINE_CHAR_CODE < c) {
      continue;
    }

    if (skip) {
      skip = false;
      continue;
    }

    skip = true;
    acc += c - ZERO_CHAR_CODE;
  }

  return acc;
}
