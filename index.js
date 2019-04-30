window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeSVG);
function init() {
  console.log("INIT");
  fetch("timeline-mockup2.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log("The SVG data:", svgData);
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgData);

      resizeSVG();
    });
}

function resizeSVG() {
  const svgplaceholders = document.querySelectorAll(".svgplaceholder");
  svgplaceholders.forEach(replaceSVGWithHTML);
}

function fitRect(svgElement, htmlElement) {
  svgElement = document.querySelector(svgElement);
  const rect = svgElement.getBoundingClientRect();
  console.log(rect);

  htmlElement.style.left = rect.x + "px";
  htmlElement.style.top = rect.y + "px";
  htmlElement.style.width = rect.width + "px";
  htmlElement.style.height = rect.height + "px";
}

function replaceSVGWithHTML(htmlElement) {
  const svgID = htmlElement.dataset.svgplaceholder;
  const svgSelector = "#" + svgID + " .HTML_placeholder";
  fitRect(svgSelector, htmlElement);
}
