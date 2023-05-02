describe("Given valid array-like inputs", () => {
  const largeNumberOfZeroes = 100_000;
  const expectations = [
    {
      title: "large prefix",
      input: function* () {
        for (let i = 0; i < largeNumberOfZeroes; i++) yield 0;
        yield 3;
        yield 1;
        yield 4;
        yield 1;
        yield 5;
        yield 9;
      },
      output: [3, 1, 4, 1, 5, 9],
    },
    {
      title: "large suffix",
      input: function* () {
        yield 3;
        yield 1;
        yield 4;
        yield 1;
        yield 5;
        yield 9;
        for (let i = 0; i < largeNumberOfZeroes; i++) yield 0;
      },
      output: [3, 1, 4, 1, 5, 9],
    },
    {
      title: "large prefix and suffix",
      input: function* () {
        for (let i = 0; i < largeNumberOfZeroes; i++) yield 0;
        yield 3;
        yield 1;
        yield 4;
        yield 1;
        yield 5;
        yield 9;
        for (let i = 0; i < largeNumberOfZeroes; i++) yield 0;
      },
      output: [3, 1, 4, 1, 5, 9],
    },
    {
      title: "large range of valid zeroes",
      input: function* () {
        yield 3;
        yield 1;
        yield 4;
        for (let i = 0; i < largeNumberOfZeroes; i++) yield 0;
        yield 1;
        yield 5;
        yield 9;
      },
      output: [
        3,
        1,
        4,
        ...(function* () {
          for (let i = 0; i < largeNumberOfZeroes; i++) yield 0;
        })(),
        1,
        5,
        9,
      ],
    },
  ];
  expectations.forEach(({ title, input, output }) => {
    describe(title, () => {
      // Arrange & Act
      const actual = Array.from(removeZeroes(input()));

      // Assert
      it(`should trim the result to the expected ${output.length} elements`, () =>
        actual.should.have.members(output));
    });
  });
});
