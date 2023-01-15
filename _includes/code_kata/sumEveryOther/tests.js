mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    { input: 548915381, output: 26, because: "4, 9, 5, and 8" },
    { input: 10, output: 0, because: "0" },
    { input: 1010.11, output: 1, because: "0, 0, and 1" },
  ];
  expectations.forEach(({ input, output, because }) => {
    it(`should return ${output} for the number ${input} because the expected digits are ${because}`, () => {
      sumEveryOther(input).should.equal(output);
    });
  });
});

mocha.run();
