mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    {
      input: "()",
      output: 0,
    },
    {
      input: "(()",
      output: 1,
    },
    {
      input: "))()))))()",
      output: 6,
    },
    {
      input: ")))))",
      output: 5,
    },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${input}`, () => {
      numBalanced(input).should.equal(output);
    });
  });
});

describe("Given additional valid inputs", () => {
  const expectations = [
    {
      input: "XYZ()",
      output: 0,
    },
    {
      input: "((xyz)",
      output: 1,
    },
    {
      input: "}))()))))()",
      output: 6,
    },
    {
      input: "])))))",
      output: 5,
    },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${input}, ignoring characters that are not parentheses`, () => {
      numBalanced(input).should.equal(output);
    });
  });
});

describe("Given invalid input", () => {
  it("should return 0 when the input is an empty string", () => {
    numBalanced("").should.equal(0);
  });
  it("should return 0 when the input is not a string", () => {
    numBalanced(null).should.equal(0);
    numBalanced(undefined).should.equal(0);
    numBalanced([]).should.equal(0);
    numBalanced({}).should.equal(0);
    numBalanced(1).should.equal(0);
  });
});

mocha.run();
