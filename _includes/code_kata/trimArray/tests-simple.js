mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    {
      input: [[1, 2, 3, 4, 5, 6], 2, 1],
      output: [3, 4, 5],
    },
    {
      input: [[6, 2, 4, 3, 7, 1, 3], 5, 0],
      output: [1, 3],
    },
    {
      input: [[1, 7], 0, 0],
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
