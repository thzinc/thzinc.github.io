function configureContainer(elementId) {
  window.addEventListener("load", () => {
    const root = document.getElementById(elementId);
    root.style.position = "relative";

    const progress = document.createElement("progress");
    progress.max = 100;
    progress.value = 0;
    progress.style.zIndex = 1000;
    root.append(progress);

    const decayInterval = setInterval(() => {
      let maxCurrentSize = 0;
      for (const container of root.querySelectorAll(".draggable")) {
        const currentSize = parseInt(container.dataset.size, 10);
        const originalSize = parseInt(container.dataset.originalSize, 10);

        maxCurrentSize = Math.max(maxCurrentSize, currentSize);

        if (originalSize < currentSize) {
          setContainerSize(container, currentSize - 1);
        }
      }

      progress.value = maxCurrentSize;
    }, 1000);

    function chomp(ev, size) {
      const { pageX, pageY } = ev;
      addStim(root, pageX, pageY);

      return isGameOver(size);
    }

    function isGameOver(size) {
      if (size < 100) return true;

      clearInterval(decayInterval);
      alert("A winner is you!");
      return false;
    }

    // Start game with two containers
    addContainer(root, 10, chomp);
    addContainer(root, 10, chomp);
  });
}

/**
 * @type HTMLDivElement
 */
let dragged = null;

function createContainer(size, x, y) {
  const container = document.createElement("div");
  container.classList.add("draggable");
  container.style.position = "absolute";
  container.style.cursor = "";
  container.draggable = true;
  container.dataset.originalSize = size;
  container.dataset.x = x;
  container.dataset.y = y;
  setContainerSize(container, size);

  return container;
}

function setContainerSize(container, size) {
  const width = 1 + size;
  const height = width;
  container.dataset.size = size;
  container.style.top = `calc(${container.dataset.x}% - ${width / 2}vh)`;
  container.style.left = `calc(${container.dataset.y}% - ${height / 2}vh)`;
  container.style.width = `${width}vh`;
  container.style.height = `${height}vh`;
  container.style.zIndex = 100 - size;
}

function addContainer(root, maxSize = 10, onChomp = (newSize) => {}) {
  const size = Math.floor(Math.random() * maxSize);
  const x = 12.5 + Math.floor(Math.random() * 75);
  const y = 12.5 + Math.floor(Math.random() * 75);

  const container = createContainer(size, x, y);

  container.addEventListener("dragstart", (ev) => {
    ev.target.classList.add("dragging");
    dragged = ev.target;
  });

  container.addEventListener("dragend", (ev) => {
    ev.target.classList.remove("dragging");
    dragged = null;
  });

  container.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    ev.target.classList.add("dropping");
  });

  container.addEventListener("dragleave", (ev) => {
    ev.preventDefault();
    ev.target.classList.remove("dropping");
  });

  container.addEventListener("drop", (ev) => {
    ev.target.classList.remove("dropping");

    if (!dragged) return;
    if (dragged === ev.target) return;

    const sourceSize = parseInt(dragged.dataset.size, 10);
    const targetSize = parseInt(ev.target.dataset.size, 10);

    if (sourceSize <= targetSize) {
      const newSize = targetSize + sourceSize;
      setContainerSize(ev.target, newSize);
      dragged.remove(dragged);
      if (!onChomp(ev, newSize)) return;

      addContainer(root, maxSize, onChomp);
    }
  });

  root.append(container);
}

function addStim(root, pageX, pageY) {
  const stim = document.createElement("div");
  stim.className = "stim active";
  stim.style.position = "fixed";
  stim.style.zIndex = 999;
  stim.style.left = `${pageX}px`;
  stim.style.top = `${pageY}px`;

  stim.append("chomp");
  root.append(stim);
  setTimeout(() => {
    stim.classList.remove("active");
  }, 10);
}
