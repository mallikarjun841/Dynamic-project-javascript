let button = document.getElementById("jokeBtn");
let joketext = document.getElementById("jokeText");
let spinner = document.getElementById("spinner");

function displaydetails() {
  let options = {
    method: "GET",
  };
  spinner.classList.remove("d-none");
  joketext.classList.add("d-none");

  let url = "https://apis.ccbp.in/jokes/random";
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (text) {
      spinner.classList.add("d-none");
      joketext.classList.remove("d-none");
      let randomjoke = text.value;
      joketext.textContent = randomjoke;
    });
}
button.addEventListener("click", displaydetails);
