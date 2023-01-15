function sumEveryOther(num) {
  const str = num.toString().replace(/\D+/, "");
  let acc = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) continue;
    const c = str[i];
    acc += parseInt(c, 10);
  }

  return acc;
}
