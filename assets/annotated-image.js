function configureAnnotatedImage(currentScript) {
  const openseadragonImagesUrlElement = document.querySelector(
    "meta[name='openseadragon:images-url']"
  );
  const viewerConfig = {
    id: currentScript.dataset.imageId,
    prefixUrl: openseadragonImagesUrlElement.content,
    tileSources: currentScript.dataset.tileSources,
  };

  const viewer = OpenSeadragon(viewerConfig);
  const anno = OpenSeadragon.Annotorious(viewer);

  const outputElement = document.getElementById(currentScript.dataset.outputId);
  const readOnly = !outputElement;
  anno.readOnly = readOnly;

  function refreshOutput() {
    if (readOnly) return;

    const cleanAnnotations = [];
    const currentPage = new URL(location.href);
    const targetSource = new URL(
      currentPage.pathname + "#" + currentScript.dataset.imageId,
      "https://thzinc.com/"
    );
    for (const annotation of anno.getAnnotations()) {
      cleanAnnotations.push({
        ...annotation,
        target: { ...annotation.target, source: targetSource },
      });
    }
    outputElement.value = JSON.stringify(cleanAnnotations);
  }
  anno.on("createAnnotation", refreshOutput);
  anno.on("updateAnnotation", refreshOutput);
  anno.on("deleteAnnotation", refreshOutput);

  const annotationsListElement = document.getElementById(
    currentScript.dataset.annotationsListId
  );
  for (const li of annotationsListElement.querySelectorAll("a")) {
    li.addEventListener("click", () => anno.fitBounds(li.dataset.annotationId));
  }

  const annotationsElement = document.getElementById(
    currentScript.dataset.annotationsId
  );
  const annotations = JSON.parse(annotationsElement.textContent);
  for (const annotation of annotations) {
    anno.addAnnotation(annotation);
  }
  refreshOutput();
}
