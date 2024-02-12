const display = document.getElementById("aside");

function getInputValue(inputId) {
  const value = parseFloat(document.getElementById(inputId).value);
  document.getElementById(inputId).value = "";
    return value;
}

function triangleCalculator() {
  const base = getInputValue("traingle-base");
  const height = getInputValue("traingle-height");
  const area = 0.5 * base * height;
  if(area >= 0){
    display.innerHTML = `<p>Traingle Area: ${area} cm<sup>2</sup></sup></p>`;
  } else{
    alert('Invalid Input')
  }
}

function rectangleCalculator() {
  const base = getInputValue("rectangle-base");
  const height = getInputValue("rectangle-height");
  const area = base * height;
  if(area >= 0){
    display.innerHTML = `<p>Rectangle Area: ${area} cm<sup>2</sup></sup></p>`;
  } else{
    alert('Invalid Input')
  }
}

function parallelogramCalculator() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  const area = 0.5 * base * height;
  if(area >= 0){
    display.innerHTML = `<p>Parallelogram Area: ${area} cm<sup>2</sup></sup></p>`;
  } else{
    alert('Invalid Input')
  }
}

function rhombusCalculator() {
  const base = getInputValue("rhombus-base");
  const height = getInputValue("rhombus-height");
  const area = 0.5 * base * height;
  if(area >= 0){
    display.innerHTML = `<p>Rhombus Area: ${area} cm<sup>2</sup></sup></p>`;
  } else{
    alert('Invalid Input')
  }
}

function pentagonCalculator() {
  const base = getInputValue("pentagon-base");
  const height = getInputValue("pentagon-height");
  const area = 0.5 * base * height;
  if(area >= 0){
    display.innerHTML = `<p>Pentagon Area: ${area} cm<sup>2</sup></sup></p>`;
  } else{
    alert('Invalid Input')
  }
}

function ellipseCalculator() {
  const base = getInputValue("ellipse-base");
  const height = getInputValue("ellipse-height");
  const area = (Math.PI).toFixed(3) * base * height;
  if(area >= 0){
    display.innerHTML = `<p>Ellipse Area: ${area} cm<sup>2</sup></sup></p>`;
  } else{
    alert('Invalid Input')
  }
}
