window.addEventListener("DOMContentLoaded", loadJson);
window.addEventListener("DOMContentLoaded", init);

window.addEventListener("resize", resizeSVG);
function init() {
  console.log("INIT");
  fetch("timeline-mockup2.svg")
    .then(response => response.text())
    .then(svgData => {
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgData);

      resizeSVG();
    });
}
function loadJson() {
  fetch("data.json")
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      jsonData.forEach(handler);
    });
}
function handler(object) {
  console.log(object);
  let movieTemplate = document.querySelector("#movieTemplate");
  let clonedTemplate = movieTemplate.content.cloneNode(true);
  clonedTemplate.querySelector("[data-field='title']").textContent =
    object.title;
  clonedTemplate.querySelector("[data-field='year']").textContent = object.year;
  clonedTemplate.querySelector("[data-field='director']").textContent =
    object.director;
  clonedTemplate.querySelector("[data-field='img']").src =
    object.image + ".jpg";

  console.log(`.svgplaceholder [data-svgplaceholder=${object.id}]`);
  document
    .querySelector(`.svgplaceholder[data-svgplaceholder=${object.id}]`)
    .append(clonedTemplate);
}

function resizeSVG() {
  const svgplaceholders = document.querySelectorAll(".svgplaceholder");
  svgplaceholders.forEach(replaceSVGWithHTML);
}

function fitRect(svgElement, htmlElement) {
  svgElement = document.querySelector(svgElement);
  const rect = svgElement.getBoundingClientRect();

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
