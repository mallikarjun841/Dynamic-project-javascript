let buttoncolorstop = document.getElementById("stopButton");
let buttoncolorready = document.getElementById("readyButton");
let buttoncolorgo = document.getElementById("goButton");
let lightcolostop = document.getElementById("stopLight");
let lightcolorready = document.getElementById("readyLight");
let lightcolorgo = document.getElementById("goLight");

function stop() {
  buttoncolorstop.style.backgroundColor = "#cf1124";
  buttoncolorready.style.backgroundColor = "#4b5069";
  buttoncolorgo.style.backgroundColor = "#4b5069";
  lightcolorgo.style.backgroundColor = "#4b5069";
  lightcolorready.style.backgroundColor = "#4b5069";
  lightcolostop.style.backgroundColor = "#cf1124";
}

function ready() {
  buttoncolorready.style.backgroundColor = "#f7c948";
  buttoncolorstop.style.backgroundColor = "#4b5069";
  buttoncolorgo.style.backgroundColor = "#4b5069";
  lightcolorready.style.backgroundColor = "#f7c948";
  lightcolorgo.style.backgroundColor = "#4b5069";
  lightcolostop.style.backgroundColor = "#4b5069";
}

function go() {
  buttoncolorgo.style.backgroundColor = "#199473";
  buttoncolorstop.style.backgroundColor = "#4b5069";
  buttoncolorready.style.backgroundColor = "#4b5069";
  lightcolorgo.style.backgroundColor = "#199473";
  lightcolorready.style.backgroundColor = "#4b5069";
  lightcolostop.style.backgroundColor = "#4b5069";
}
