function seeBuildingsLeft(input = []) {
  const { count } = input.reduce(
    ({ count, max }, curr) => {
      if (curr <= max) return { count, max };
      return { count: count + 1, max: curr };
    },
    { count: 0 }
  );

  return count;
}
