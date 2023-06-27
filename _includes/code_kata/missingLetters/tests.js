mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    {
      input: ["a", "b", "c", "d", "f"],
      output: ["e"],
    },
    {
      input: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "w",
        "x",
        "y",
        "z",
      ],
      output: ["f", "g", "v"],
    },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${JSON.stringify(output)} for the input ${JSON.stringify(
      input
    )}`, () => {
      // Act
      const actual = missingLetters(input);

      // Assert
      Array.from(actual).should.deep.equal(output);
    });
  });
});

mocha.run();
