describe("Given valid array inputs", () => {
  const expectations = [
    {
      input: [0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0],
      output: [3, 1, 4, 1, 5, 9],
    },
    {
      input: [0, 0, 0],
      output: [],
    },
    {
      input: [8],
      output: [8],
    },
    {
      input: [0, 0, 0, 1],
      output: [1],
    },
    {
      input: [1, 0, 0, 0],
      output: [1],
    },
    {
      input: [1, 0, 0, 0, 1],
      output: [1, 0, 0, 0, 1],
    },
    {
      input: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      output: [1, 0, 0, 0, 1],
    },
  ];
  expectations.forEach(({ input, output }) => {
    describe(JSON.stringify(input), () => {
      // Arrange & Act
      const actual = Array.from(removeZeroes(input));

      // Assert
      it(`should trim the result to ${JSON.stringify(output)}`, () =>
        actual.should.have.members(output));
    });
  });
});
