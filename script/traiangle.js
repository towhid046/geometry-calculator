function getInputValue(inputId) {
  const value = parseFloat(document.getElementById(inputId).value);
  document.getElementById(inputId).value = "";
  return value;
}

function traingleCalculator() {
  const traingleBase = getInputValue("traingle-base");
  const traingleHeight = getInputValue("traingle-height");
  console.log(traingleBase, traingleHeight);
  const area = 0.5 * traingleBase * traingleHeight;
  document.getElementById("aside").innerText = `Traingle Area: ${area}`;
}
