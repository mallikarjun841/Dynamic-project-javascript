let searchinput = document.getElementById("searchInput");
let img = document.getElementById("image");
let spinner = document.getElementById("spinner");
let resultcontainer = document.getElementById("searchResults");
let headingcontainer = document.getElementById("headingcontainer");
let headingss = document.getElementById("mainheading");
let result = document.getElementById("errormsg");

let bookslist = [];

function makebooksrelateucall(books) {
  let { imageLink, author } = books;

  headingss.textContent = "Popular Books";

  let storingbookcontainer = document.createElement("div");
  storingbookcontainer.classList.add("col-6", "d-flex", "flex-column");
  resultcontainer.appendChild(storingbookcontainer);

  let createimage = document.createElement("img");
  createimage.classList.add("bookimg", "p-4", "w-60", "text-center", "ml-3");
  createimage.src = imageLink;
  storingbookcontainer.appendChild(createimage);

  let authorname = document.createElement("p");
  authorname.textContent = author;
  authorname.classList.add("authorname");
  storingbookcontainer.appendChild(authorname);
}

function findbookitems(finddatas) {
  if (finddatas.length !== 0) {
    for (let items of finddatas) {
      makebooksrelateucall(items);
    }
  } else {
    headingss.textContent = "";
    result.textContent = "content not found";
  }
}

function calltheitemwithrequest(value) {
  let options = {
    method: "GET",
  };
  let url = "https://apis.ccbp.in/book-store?title=" + value;
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (finddata) {
      spinner.classList.add("d-none");
      findbookitems(finddata.search_results);
    });
}

function makedatetoapply(event) {
  if (event.key === "Enter") {
    resultcontainer.textContent = "";
    headingss.textContent = "";
    let value = event.target.value;
    spinner.classList.remove("d-none");
    calltheitemwithrequest(value);
  }
}
searchinput.addEventListener("keydown", makedatetoapply);
