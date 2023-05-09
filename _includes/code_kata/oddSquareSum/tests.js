mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    { input: 1, output: 0 },
    { input: 2, output: 1 },
    { input: 9, output: 1 },
    { input: 10, output: 10 },
    { input: 44, output: 35 },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${input}`, () => {
      oddSquareSum(input).should.equal(output);
    });
  });
});

// https://oeis.org/A016754
const A016754 = [
  1, 9, 25, 49, 81, 121, 169, 225, 289, 361, 441, 529, 625, 729, 841, 961, 1089,
  1225, 1369, 1521, 1681, 1849, 2025, 2209, 2401, 2601, 2809, 3025, 3249, 3481,
  3721, 3969, 4225, 4489, 4761, 5041, 5329, 5625, 5929, 6241, 6561, 6889, 7225,
  7569,
];
describe("Given elements of integer sequence A016754", () => {
  describe("When the limit is equal to the element of the sequence", () => {
    const expectations = A016754.map((lim, i, a) => ({
      input: lim,
      output: a.slice(0, i).reduce((acc, cur) => acc + cur, 0),
    }));
    expectations.forEach(({ input, output }) => {
      it(`should return ${output} for the input ${input}`, () => {
        oddSquareSum(input).should.equal(output);
      });
    });
  });

  describe("When the limit is equal one greater than the element of the sequence", () => {
    const expectations = A016754.map((lim, i, a) => ({
      input: lim + 1,
      output: a.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0),
    }));
    expectations.forEach(({ input, output }) => {
      it(`should return ${output} for the input ${input}`, () => {
        oddSquareSum(input).should.equal(output);
      });
    });
  });
});

mocha.run();
