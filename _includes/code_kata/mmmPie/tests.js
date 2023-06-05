mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    {
      input: [
        [
          { name: "Joe", num: 9 },
          { name: "Cami", num: 3 },
          { name: "Cassidy", num: 4 },
        ],
        8,
      ],
      output: 2,
    },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${JSON.stringify(input)}`, () => {
      mmmPie(...input).should.equal(output);
    });
  });
});

describe("Given additional examples", () => {
  const typicalPeople = [
    { name: "Joe", num: 9 },
    { name: "Cami", num: 3 },
    { name: "Cassidy", num: 4 },
  ];

  it("should return NaN if the number of slices per pie is zero", () => {
    // Act
    const actual = mmmPie(typicalPeople, 0);

    // Assert
    isNaN(actual).should.be.true;
  });
  it("should return NaN if the number of slices per pie is negative", () => {
    // Act
    const actual = mmmPie(typicalPeople, -1);

    // Assert
    isNaN(actual).should.be.true;
  });
  it("should return 1 if the number of slices per pie is infinity", () => {
    // Act
    const actual = mmmPie(typicalPeople, Infinity);

    // Assert
    actual.should.equal(1);
  });
  it("should return an integer when the slices per pie is a real number", () => {
    // Act
    const actual = mmmPie(typicalPeople, 8.5);

    // Assert
    actual.should.equal(2);
  });
  it("should return an integer when the total of the slices needed is a real number", () => {
    // Arrange
    const realPeople = [
      { name: "Joe", num: 9.1 },
      { name: "Cami", num: 3.2 },
      { name: "Cassidy", num: 4.3 },
    ];

    // Act
    const actual = mmmPie(realPeople, 8);

    // Assert
    actual.should.equal(3);
  });
  it("should return the expected number of pies when the total slices needed adds up to a positive number", () => {
    // Arrange
    const accountants = [
      { name: "Joe", num: -8 },
      { name: "Cami", num: 9 },
      { name: "Cassidy", num: 8 },
    ];

    // Act
    const actual = mmmPie(accountants, 8);

    // Assert
    actual.should.equal(2);
  });
  it("should return zero when the total slices needed adds up to a negative number", () => {
    // Arrange
    const accountants = [
      { name: "Joe", num: -8 },
      { name: "Cami", num: 3 },
      { name: "Cassidy", num: 2 },
    ];

    // Act
    const actual = mmmPie(accountants, 8);

    // Assert
    actual.should.equal(0);
  });
  it("should return infinity when the total of the slices needed is infinity", () => {
    // Arrange
    const infinitePeople = [
      { name: "Joe", num: Infinity },
      { name: "Cami", num: 3 },
      { name: "Cassidy", num: 4 },
    ];

    // Act
    const actual = mmmPie(infinitePeople, 8);

    // Assert
    actual.should.equal(Infinity);
  });
});

mocha.run();
