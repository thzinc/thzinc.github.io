function numBalanced(input = "") {
  if (typeof input !== "string") return 0;

  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    switch (input.charAt(i)) {
      case "(":
        sum++;
        break;
      case ")":
        sum--;
        break;
    }
  }

  return Math.abs(sum);
}
