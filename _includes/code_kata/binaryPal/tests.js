mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    { input: 5, output: true },
    { input: 10, output: false },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${input}`, () => {
      binaryPal(input).should.equal(output);
    });
  });
});

describe("Given additional examples", () => {
  const expectations = [
    { input: -1, output: false },
    { input: 0, output: true },
    { input: 1, output: true },
    { input: 2, output: false },
    { input: 1234, output: false },
    { input: 0b1111, output: true },
    { input: 0b10000, output: false },
    { input: 0b1111111111, output: true },
    { input: 0b10000000000, output: false },
    { input: 0b110011, output: true },
    { input: 0b11011, output: true },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${input}`, () => {
      binaryPal(input).should.equal(output);
    });
  });
});

mocha.run();
