let userinput = document.getElementById("searchInput");
let resultcountries = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");
let searchinputvalue = "";
let countrieslist = [];

function createappendcountry(country) {
  let { name, flag, population } = country;
  let creatediv = document.createElement("div");
  creatediv.classList.add(
    "d-flex",
    "flex-row",
    "country-card",
    "col-11",
    "col-md-5",
    "ml-auto",
    "mr-auto"
  );
  resultcountries.appendChild(creatediv);

  let image = document.createElement("img");
  image.src = flag;
  image.classList.add("country-flag", "mt-auto", "mb-auto");
  creatediv.appendChild(image);

  let createcountrydiv = document.createElement("div");
  createcountrydiv.classList.add("d-flex", "flex-column", "ml-4");
  creatediv.appendChild(createcountrydiv);

  let countrynames = document.createElement("p");
  countrynames.textContent = name;
  countrynames.classList.add("country-name");
  createcountrydiv.appendChild(countrynames);

  let countrycode = document.createElement("p");
  countrycode.textContent = population;
  countrycode.classList.add("country-population");
  createcountrydiv.appendChild(countrycode);
  console.log(resultcountries);
}

function displayflag() {
  resultcountries.textContent = "";
  for (let country of countrieslist) {
    let countryname = country.name;
    if (countryname.includes(searchinputvalue)) {
      createappendcountry(country);
    }
  }
}

function sendingflagcontent() {
  let options = {
    method: "GET",
  };
  spinner.classList.remove("d-none");
  let url = "https://apis.ccbp.in/countries-data";
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (findata) {
      countrieslist = findata;
      spinner.classList.add("d-none");
      displayflag();
    });
}

function makesearchinput(event) {
  searchinputvalue = event.target.value;
  displayflag();
}
sendingflagcontent();
userinput.addEventListener("keyup", makesearchinput);
