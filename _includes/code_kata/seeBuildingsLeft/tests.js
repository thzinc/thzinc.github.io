mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given the examples from the question", () => {
  const expectations = [
    {
      input: [1, 2, 3, 4, 5],
      output: 5,
    },
    {
      input: [5, 4, 3, 2, 1],
      output: 1,
    },
    {
      input: [3, 7, 8, 3, 6, 1],
      output: 3,
    },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${input}`, () => {
      seeBuildingsLeft(input).should.equal(output);
    });
  });
});

describe("Given other inputs", () => {
  const expectations = [
    {
      input: [],
      output: 0,
    },
    {
      input: [-5, -4, -3, -2, -1],
      output: 5,
    },
    {
      input: [-1, -2, -3, -4, -5],
      output: 1,
    },
    {
      input: (function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
      })(),
      output: 5,
    },
    {
      input: (function* () {
        yield 5;
        yield 4;
        yield 3;
        yield 2;
        yield 1;
      })(),
      output: 1,
    },
    {
      input: (function* () {
        yield 3;
        yield 7;
        yield 8;
        yield 3;
        yield 6;
        yield 1;
      })(),
      output: 3,
    },
    {
      input: (function* () {
        for (let i = 0; i < 100_000; i++) {
          yield i;
        }
      })(),
      output: 100_000,
    },
    {
      input: (function* () {
        for (let i = 100_000; i >= 0; i--) {
          yield i;
        }
      })(),
      output: 1,
    },
  ];
  expectations.forEach(({ input, output }) => {
    it(`should return ${output} for the input ${input}`, () => {
      seeBuildingsLeft(input).should.equal(output);
    });
  });
});

mocha.run();
