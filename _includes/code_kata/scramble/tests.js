mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given valid inputs", () => {
  const expectations = [
    {
      input: ["A quick brown fox jumped over the lazy dog."],
      output: "A qciuk bwron fox jmepud oevr the lzay dog.",
    },
    {
      input: [
        "A quick brown fox jumped over the lazy dog.",
        "There is a snake in my boots.",
      ],
      output:
        "A qciuk bwron fox jmepud oevr the lzay dog. Trehe is a sknae in my botos.",
    },
  ];
  expectations.forEach(({ input, output }) => {
    describe(JSON.stringify(input), () => {
      // Arrange
      const wordPattern = /\w+/g;
      const expectedWords = Array.from(output.matchAll(wordPattern));
      const expectedNonWordCharacters = output.replace(/\w/g, "X");

      // Act
      const actual = scramble(input);
      const actualWords = Array.from(actual.matchAll(wordPattern));
      const actualNonWordCharacters = actual.replace(/\w/g, "X");

      // Assert
      it("should result in the same number of words", () =>
        actualWords.should.have.lengthOf(expectedWords.length));

      it("should preserve non-word characters", () => {
        expectedNonWordCharacters.should.equal(actualNonWordCharacters);
      });

      for (let i = 0; i < expectedWords.length; i++) {
        // Arrange
        const [expectedWord] = expectedWords[i] || [];
        const [actualWord] = actualWords[i] || [];
        describe(`${expectedWord} ~= ${actualWord}`, () => {
          it("should match first letter", () => {
            // Arrange
            const expectedFirst = expectedWord.slice(0, 1);

            // Act
            const actualFirst = actualWord.slice(0, 1);

            // Assert
            actualFirst.should.equal(expectedFirst);
          });

          it("should match last letter", () => {
            // Arrange
            const expectedLast = expectedWord.slice(-1);

            // Act
            const actualLast = actualWord.slice(-1);

            // Assert
            actualLast.should.equal(expectedLast);
          });

          it("should have the same letters in between", () => {
            // Arrange
            const expectedMiddle = Array.from(expectedWord.slice(1, -1));
            expectedMiddle.sort();

            // Act
            const actualMiddle = Array.from(actualWord.slice(1, -1));
            actualMiddle.sort();

            // Assert
            actualMiddle.should.deep.equal(expectedMiddle);
          });
        });
      }
    });
  });
});

mocha.run();
