let hourhand = document.querySelector("[data-hour-hand");
let minhand = document.querySelector("[data-min-hand");
let sechand = document.querySelector("[data-sec-hand");

setInterval(function () {
  let date = new Date();
  let seconds = date.getSeconds() / 60;
  let mins = (seconds + date.getMinutes()) / 60;
  let hours = (mins + date.getHours()) / 12;
  setRotation(hourhand, hours);
  setRotation(minhand, mins);
  setRotation(sechand, seconds);
}, 1000);

function setRotation(element, rotationratio) {
  element.style.setProperty("--rotation", rotationratio * 360);
}
