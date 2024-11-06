window.addEventListener("load", () => {
  mermaid.initialize({
    startOnLoad: true,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
    },
  });
  window.mermaid.init(
    undefined,
    document.querySelectorAll(".language-mermaid")
  );
});
