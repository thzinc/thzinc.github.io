mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    {
      input: [1, 2, 3, 4, 20, 21, 22, 23],
      output: "[1,2,3,4,...,20,21,22,23]",
      because:
        "there should be ellipses to denote the gap between the value 4 and 20",
    },
    {
      input: [1, 2, 3, 5, 6],
      output: "[1,2,3,4,5,6]",
      because:
        "the range should be filled in with the missing value 4 because the gap between the value 3 and 5 is a single integer",
    },
    {
      input: [1, 3, 20, 27],
      output: "[1,2,3,...,20,...,27]",
      because: "the both criteria are employed here",
    },
  ];
  expectations.forEach(({ input, output, because }) => {
    it(`should return ${output} for the input ${input} because the expected digits are ${because}`, () => {
      missingBits(input).should.equal(output);
    });
  });
});

describe("Given additional criteria derived from the examples", () => {
  it("should handle an empty array", () => {
    missingBits([]).should.equal("[]");
  });

  it("should return a string", () => {
    missingBits([]).should.be.a("string");
  });
});

mocha.run();
