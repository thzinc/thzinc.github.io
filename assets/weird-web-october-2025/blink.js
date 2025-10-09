const SVG_NS = "http://www.w3.org/2000/svg";
const XHTML_NS = "http://www.w3.org/1999/xhtml";
const grays = ["#555", "#777", "#999", "#BBB"];
const effects = ["sway", "jitter", "breathe", "glitch"];

function configure(elementId) {
  window.addEventListener("load", () => {
    const root = document.getElementById(elementId);
    root.style.position = "relative";

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "viewBox", "0 0 100 100");
    root.append(svg);

    const stylesheet = document.createElementNS(XHTML_NS, "link");
    stylesheet.setAttributeNS(
      null,
      "href",
      "/assets/weird-web-october-2025/blink.css"
    );
    stylesheet.setAttributeNS(null, "type", "text/css");
    stylesheet.setAttributeNS(null, "rel", "stylesheet");
    svg.append(stylesheet);

    const static = Array.from(createRandomShapes(10, [...effects, "none"]));
    const anomalies = Array.from(createRandomShapes(10, ["anomaly-at-rest"]));

    svg.append(...static);
    svg.append(...anomalies);

    const active = new Set();
    function anomalyClickHandler(ev) {
      deactivate(ev.target);
    }

    /**
     * Activate an anomaly
     * @param {SVGRectElement} anomaly
     */
    function activate(anomaly) {
      anomaly.classList.add("active");
      anomaly.classList.add(randomElement(effects));
      anomaly.dataset.originalFill = anomaly.getAttributeNS(null, "fill");
      anomaly.setAttributeNS(null, "fill", randomElement(grays));
      anomaly.addEventListener("click", anomalyClickHandler);
      active.add(anomaly);
      meter.value = active.size;
    }

    /**
     * Deactivate an anomaly
     * @param {SVGRectElement} anomaly
     */
    function deactivate(anomaly) {
      anomaly.classList.remove(...effects);
      anomaly.classList.remove("active");
      anomaly.setAttributeNS(null, "fill", anomaly.dataset.originalFill);
      anomaly.removeEventListener("click", anomalyClickHandler);
      active.delete(anomaly);
      meter.value = active.size;
    }

    const topLid = document.createElementNS(SVG_NS, "rect");
    topLid.classList.add("lid");
    topLid.classList.add("top");
    topLid.classList.add("open");
    topLid.setAttributeNS(null, "x", "-1000");
    topLid.setAttributeNS(null, "y", "0");
    topLid.setAttributeNS(null, "width", "2100");
    topLid.setAttributeNS(null, "height", "50");
    svg.append(topLid);

    const bottomLid = document.createElementNS(SVG_NS, "rect");
    bottomLid.classList.add("lid");
    bottomLid.classList.add("bottom");
    bottomLid.classList.add("open");
    bottomLid.setAttributeNS(null, "x", "-1000");
    bottomLid.setAttributeNS(null, "y", "50");
    bottomLid.setAttributeNS(null, "width", "2100");
    bottomLid.setAttributeNS(null, "height", "50");
    svg.append(bottomLid);

    const progress = document.createElement("progress");
    progress.style.position = "absolute";
    progress.style.left = "0";
    progress.style.bottom = "0";
    progress.style.width = "100%";
    progress.style.height = "auto";
    progress.max = anomalies.length + 1;
    progress.value = 0;
    root.append(progress);

    const meter = document.createElement("meter");
    meter.style.position = "absolute";
    meter.style.right = "0";
    meter.style.top = "0";
    meter.style.maxWidth = "33%";
    meter.style.height = "auto";
    meter.min = 0;
    meter.high = 3;
    meter.max = 5;
    meter.value = active.size;
    root.append(meter);

    const blinkInterval = setInterval(() => {
      topLid.classList.remove("open");
      bottomLid.classList.remove("open");
      progress.value += 1;

      if (active.size > 5) {
        alert("Too many anomalies! You lose.");
        clearInterval(blinkInterval);
        return;
      }

      const anomaly = anomalies.pop();
      if (!anomaly) {
        let message;
        switch (active.size) {
          case 0:
            message = "No anomalies active. You win!";
            break;
          case 1:
            message =
              "A single anomaly was left active. You win, but can you do better?";
            break;
          default:
            message = `You win, but there were still ${active.size} anomalies active.`;
            break;
        }
        alert(message);
        clearInterval(blinkInterval);
        return;
      }

      activate(anomaly);

      setTimeout(() => {
        topLid.classList.add("open");
        bottomLid.classList.add("open");
      }, 500);
    }, 7500);
  });
}

function* createRandomShapes(count, allowedEffects) {
  for (let i = 0; i < count; i++) {
    yield createRandomShape(allowedEffects);
  }
}

function randomElement(allowedEffects) {
  const effectIndex = Math.floor(Math.random() * allowedEffects.length);
  const effect = allowedEffects[effectIndex];
  return effect;
}

function createRandomShape(allowedEffects) {
  const width = Math.random() * 10 + 10;
  const height = Math.random() * 10 + 10;
  const x = Math.max(0, Math.random() * 100 - width);
  const y = Math.max(0, Math.random() * 100 - height);
  const effect = randomElement(allowedEffects);

  const rect = document.createElementNS(SVG_NS, "rect");
  rect.classList.add("shape");
  rect.classList.add(effect);
  rect.setAttributeNS(null, "x", `${x}`);
  rect.setAttributeNS(null, "y", `${y}`);
  rect.setAttributeNS(null, "width", `${width}`);
  rect.setAttributeNS(null, "height", `${height}`);
  rect.setAttributeNS(null, "fill", randomElement(grays));
  return rect;
}
