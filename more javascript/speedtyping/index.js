let quotes = document.getElementById("quoteDisplay");
let timer = document.getElementById("timers");
let textareacontent = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submitbutton = document.getElementById("submitBtn");
let spinner = document.getElementById("spinner");

let count = 0;
let uniquetime = setInterval(function () {
  timer.textContent = count;

  count = count + 1;
}, 1000);

submitbutton.addEventListener("click", function () {
  let text = "Your typed in " + timer.textContent + " seconds";
  if (quotes.textContent === textareacontent.value) {
    result.textContent = text;
    clearInterval(uniquetime);
  } else {
    result.textContent = "You typed incorrect sentence";
  }
});
let resetbutton = document.getElementById("resetBtn");
resetbutton.addEventListener("click", function () {
  textareacontent.value = "";
  timer.textContent = 0;
  count = 0;
});

let options = {
  method: "GET",
};
spinner.classList.remove("d-none");
let url = "https://apis.ccbp.in/random-quote";
fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    spinner.classList.add("d-none");
    quotes.textContent = data.content;
  });
