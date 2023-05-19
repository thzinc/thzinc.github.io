function binaryPal(num) {
  if (num < 0) return false; // Reject negative numbers
  if (num < 2) return true; // Zero and one are both palindromic

  let acc = num & 0b1;
  if (acc === 0) return false; // Even numbers cannot be base-2 palindromes

  let dec = num >> 1;

  while (acc <= dec) {
    if (dec === acc) return true;

    const n = dec & 0b1;
    dec >>= 1;
    if (dec === acc) return true;

    acc = (acc << 1) | n;
  }
  return false;
}
