function getColumn(input = "") {
  if (typeof input !== "string") return NaN;
  if (input.length === 0) return NaN;

  const normalized = input.toUpperCase();
  let acc = 0;
  for (let i = 0; i < normalized.length; i++) {
    // Get the ASCII value for the letter
    const c = normalized.charCodeAt(i);

    // If the ASCII value is not between A-Z inclusive, stop processing
    if (c < CAPITAL_A || CAPITAL_Z < c) return NaN;

    // Get the value of the character
    const value = c - CAPITAL_A;

    // Calculate the base (in base-26) to which to add the value, then add the result to the accumulated total
    acc += value + Math.pow(26, i);
  }

  return acc;
}

const CAPITAL_A = 0x41;
const CAPITAL_Z = 0x5a;
