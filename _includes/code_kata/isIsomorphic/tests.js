mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Given valid inputs", () => {
  it("should succeed with a trivial example", () => {
    isIsomorphic("abb", "cdd").should.be.true;
  });
  it("should fail with a trivial example", () => {
    isIsomorphic("cassidy", "1234567").should.be.false;
  });
  it("should succeed with another trivial example", () => {
    isIsomorphic("cass", "1233").should.be.true;
  });
});
describe("Extra assertions", () => {
  it("should fail with strings of different lengths", () => {
    isIsomorphic("short", "very long").should.be.false;
    isIsomorphic("very long", "short").should.be.false;
  });
});

mocha.run();
