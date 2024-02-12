const display = document.getElementById("aside");

// function for getting the value of input fild:
function getInputValue(inputId) {
  const value = parseFloat(document.getElementById(inputId).value);
  document.getElementById(inputId).value = "";
  return value;
}

// function for displying the valu of calculation:
function displayItem(name, value) {
  if (value >= 0) {
    display.innerHTML = `<p>${name} Area: ${value} cm<sup>2</sup></sup></p>`;
  } else {
    alert("Invalid Input!!");
  }
}

function triangleCalculator() {
  displayItem("Traingle", (0.5 * getInputValue("traingle-base") * getInputValue("traingle-height")));
}

function rectangleCalculator() {
  displayItem("Rectangle", (getInputValue("rectangle-base") * getInputValue("rectangle-height")) );
}

function parallelogramCalculator() {
  displayItem("Parallelogram", (getInputValue("parallelogram-base") * getInputValue("parallelogram-height")));
}

function rhombusCalculator() {
  displayItem("Rhombus", (0.5 * getInputValue("rhombus-base") * getInputValue("rhombus-height")));
}

function pentagonCalculator() {
  displayItem("Pentagon", (0.5 * getInputValue("pentagon-base") * getInputValue("pentagon-height")));
}

function ellipseCalculator() {
  displayItem("Ellipse", Math.PI.toFixed(3) * getInputValue("ellipse-base") * getInputValue("ellipse-height"));
}