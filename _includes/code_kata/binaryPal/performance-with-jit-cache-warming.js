mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("When comparing a string-based implementation to a bit shift-based implementation", () => {
  const maxIterations = 1_000_000;
  const stringImpl = getStringImpl();
  const bitShiftImpl = getBitShiftImpl();

  const results = [];
  for (const subject of [
    stringImpl,
    bitShiftImpl,
    stringImpl,
    bitShiftImpl,
    stringImpl,
    bitShiftImpl,
    stringImpl,
    bitShiftImpl,
  ]) {
    const start = performance.now();
    for (let i = 0; i < maxIterations; i++) {
      const rand = Math.round(Math.random() * 1_000_000_000_000);
      subject(rand);
    }
    const end = performance.now();
    results.push(end - start);
  }
  const [stringElapsedTimeMs, bitShiftElapsedTimeMs] = results.slice(-2);

  (function () {
    document.getElementById("results").innerHTML = `
      <ul>
        ${results
          .map((elapsedMs, i) => {
            const impl = i % 2 == 0 ? "string-based" : "bit shift-based";
            return `<li>${impl} implementation: ${elapsedMs} ms over ${maxIterations} invocations</li>`;
          })
          .join("")}
      </ul>
    `;
  })();

  it("bit shifting should be faster", () => {
    bitShiftElapsedTimeMs.should.be.below(stringElapsedTimeMs);
  });
});

mocha.run();
