let timer = document.getElementById("timer");
let userinput = document.getElementById("defuser");
let count = 10;
let settimer = setInterval(function () {
  timer.textContent = count;
  count -= 1;
  if (count < 1) {
    timer.textContent = "Boom";
    clearInterval(settimer);
  }
}, 1000);

function difusebomb(event) {
  let difuse = userinput.value;

  if (event.key === "Enter" && userinput.value === "defuse" && count > 1) {
    timer.textContent = "You did it";
    clearInterval(settimer);
  }
}
userinput.addEventListener("keydown", difusebomb);
