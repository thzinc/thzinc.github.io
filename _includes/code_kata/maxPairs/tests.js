mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given valid inputs", () => {
  it("should succeed with three pairs", () => {
    maxPairs(["L-10", "R-10", "L-11", "R-10", "L-10", "R-11"]).should.equal(3);
  });
  it("should succeed with no pairs", () => {
    maxPairs(["L-10", "L-11", "L-12", "L-13"]).should.equal(0);
  });
  it("should succeed with one pair", () => {
    maxPairs(["L-8", "L-8", "L-8", "R-8"]).should.equal(1);
  });
});

mocha.run();
