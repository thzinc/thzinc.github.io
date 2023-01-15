mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("When comparing an optimized implementation to an unoptimized implementation", () => {
  const maxIterations = 1_000_000;
  const unoptimized = getUnoptimized();
  const optimized = getOptimized();

  const results = [];
  for (const subject of [unoptimized, optimized]) {
    const start = performance.now();
    for (let i = 0; i < maxIterations; i++) {
      const rand = (Math.random() * 1_000_000_000_000) / 1_000_000;
      subject(rand);
    }
    const end = performance.now();
    results.push(end - start);
  }
  const [unoptimizedElapsedTimeMs, optimizedElapsedTimeMs] = results;

  it("should be faster", () => {
    optimizedElapsedTimeMs.should.be.below(unoptimizedElapsedTimeMs);
  });
});

mocha.run();
