mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    {
      input: "A",
      output: 1,
    },
    {
      input: "B",
      output: 2,
    },
    {
      input: "C",
      output: 3,
    },
    {
      input: "Z",
      output: 26,
    },
    {
      input: "AA",
      output: 27,
    },
    {
      input: "AB",
      output: 28,
    },
    {
      input: "AAA",
      output: 703,
    },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${input}`, () => {
      getColumn(input).should.equal(output);
    });
  });
  expectations.forEach(({ input: originalInput, output }) => {
    const input = originalInput.toLowerCase();
    it(`should return ${output} for the input ${input}`, () => {
      getColumn(input).should.equal(output);
    });
  });
});

describe("Given invalid input", () => {
  it("should return NaN when the input is an empty string", () => {
    isNaN(getColumn("")).should.equal(true);
  });
  it("should return NaN when the input is not a string", () => {
    isNaN(getColumn(null)).should.equal(true);
    isNaN(getColumn(undefined)).should.equal(true);
    isNaN(getColumn([])).should.equal(true);
    isNaN(getColumn({})).should.equal(true);
    isNaN(getColumn(1)).should.equal(true);
  });
  it("should return NaN when the input contains a character that is not a letter A-Z", () => {
    isNaN(getColumn("1")).should.equal(true);
    isNaN(getColumn("*")).should.equal(true);
    isNaN(getColumn("A-Z")).should.equal(true);
    isNaN(getColumn("A1")).should.equal(true);
    isNaN(getColumn("0O")).should.equal(true);
  });
});

mocha.run();
