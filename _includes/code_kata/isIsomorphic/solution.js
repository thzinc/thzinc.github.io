function isIsomorphic(a, b) {
  const count = a.length;
  if (count != b.length) return false;

  const mappings = {};
  for (let i = 0; i < count; i++) {
    const currA = a[i];
    const currB = b[i];

    const mapping = mappings[currA];
    if (!mapping) {
      mappings[currA] = currB;
    } else if (mapping !== currB) {
      return false;
    }
  }
  return true;
}
