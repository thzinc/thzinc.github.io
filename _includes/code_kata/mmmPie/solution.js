function mmmPie(people, slicesPerPie) {
  if (slicesPerPie <= 0) return NaN;
  if (!isFinite(slicesPerPie)) return 1;

  let totalSlicesNeeded = 0;
  for (const { num: slicesNeeded } of people) {
    totalSlicesNeeded += slicesNeeded;
  }

  return Math.ceil(Math.max(totalSlicesNeeded, 0) / slicesPerPie);
}
