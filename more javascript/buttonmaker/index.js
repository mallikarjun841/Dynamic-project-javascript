let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let buttons = document.getElementById("customButton");
let bgColorInput = document.getElementById("bgColorInput");

function apply() {
  buttons.style.backgroundColor = bgColorInput.value;
  buttons.style.fontSize = fontSizeInput.value;
  buttons.style.fontWeight = fontWeightInput.value;
  buttons.style.padding = paddingInput.value;
  buttons.style.borderRadius = borderRadiusInput.value;
  buttons.style.color = fontColorInput.value;
}
