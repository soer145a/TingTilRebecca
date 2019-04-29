window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("INIT");
  fetch("timeline-mockup2.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log("The SVG data:", svgData);
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgData);
      fitRect("#philosopher .HTML_placeholder", "#movie_1");
    });
}

function fitRect(svgElement, htmlElement) {
  svgElement = document.querySelector(svgElement);
  htmlElement = document.querySelector(htmlElement);

  htmlElement.style.left = svgElement.getAttribute("x") + "px";
  htmlElement.style.top = svgElement.getAttribute("y") + "px";
  htmlElement.style.width = svgElement.getAttribute("width") + "px";
  htmlElement.style.height = svgElement.getAttribute("height") + "px";
}
