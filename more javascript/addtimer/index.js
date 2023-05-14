let twentybutton = document.getElementById("twentySecondsBtn");
let thirtybutton = document.getElementById("thirtySecondsBtn");
let fourtybutton = document.getElementById("fortySecondsBtn");
let oneminbutton = document.getElementById("oneMinuteBtn");
let timeprint = document.getElementById("timerText");
let count = 0;
let timer;

function cleartimeout() {
  clearInterval(timer);
}

function starttimer() {
  if (count !== 1) {
    count -= 1;
    timeprint.textContent = count + " second left";
  } else {
    cleartimeout();
    timeprint.textContent = "Your moment is completed";
  }
}

function settimeout() {
  timeprint.textContent = count + " second left";
  timer = setInterval(starttimer, 1000);
}
twentybutton.addEventListener("click", function () {
  count = 20;
  cleartimeout();
  settimeout();
});
thirtybutton.addEventListener("click", function () {
  count = 30;
  cleartimeout();
  settimeout();
});
fourtybutton.addEventListener("click", function () {
  count = 40;
  cleartimeout();
  settimeout();
});
oneminbutton.addEventListener("click", function () {
  count = 60;
  cleartimeout();
  settimeout();
  timeprint.textContent = count + " second left";
});
