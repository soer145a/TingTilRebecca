window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("INIT");
  fetch("timeline-mockup2-01.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log("The SVG data:", svgData);
      document.querySelector("#svg_timeline").innerHTML = svgData;
    });
}
