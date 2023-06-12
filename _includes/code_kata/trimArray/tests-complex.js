describe("Given the examples from the question emitted as via a generator", () => {
  function* asArrayLike(arr) {
    for (const e of arr) {
      yield e;
    }
  }
  const expectations = [
    {
      input: [asArrayLike([1, 2, 3, 4, 5, 6]), 2, 1],
      output: [3, 4, 5],
    },
    {
      input: [asArrayLike([6, 2, 4, 3, 7, 1, 3]), 5, 0],
      output: [1, 3],
    },
    {
      input: [asArrayLike([1, 7]), 0, 0],
      output: [1, 7],
    },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${JSON.stringify(input)}`, () => {
      // Act
      const actual = trimArray(...input);

      // Assert
      Array.from(actual).should.deep.equal(output);
    });
  });
});
