let searchinput = document.getElementById("searchInput");
let spinner = document.getElementById("spinner");
let outputcontainer = document.getElementById("searchResults");

function createinternalobject(result) {
  let { title, link, description } = result;
  console.log(title);

  let creatediv = document.createElement("div");
  creatediv.classList.add("result-item");

  let titleanchor = document.createElement("a");
  titleanchor.href = link;
  titleanchor.target = "_blank";
  titleanchor.textContent = title;
  titleanchor.classList.add("result-title");
  creatediv.appendChild(titleanchor);

  let createbr = document.createElement("br");
  creatediv.appendChild(createbr);

  let linkeanchor = document.createElement("a");
  linkeanchor.href = link;
  linkeanchor.target = "_blank";
  linkeanchor.textContent = link;
  linkeanchor.classList = "result-url";
  creatediv.appendChild(linkeanchor);

  let createbr1 = document.createElement("br");
  creatediv.appendChild(createbr1);

  let descriptions = document.createElement("p");
  descriptions.textContent = description;
  descriptions.classList.add("link-description");
  creatediv.appendChild(descriptions);
  outputcontainer.appendChild(creatediv);
}

function displaycontent(searchresults) {
  console.log(searchresults);
  spinner.classList.add("d-none");
  for (let result of searchresults) {
    createinternalobject(result);
  }
}

function displaydetails(event) {
  if (event.key === "Enter") {
    spinner.classList.remove("d-none");
    outputcontainer.textContent = "";

    let value = searchinput.value;
    let options = {
      method: "GET",
    };
    let url = "https://apis.ccbp.in/wiki-search?search=" + value;
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (finddata) {
        let { search_results } = finddata;
        spinner.classList.add("d-none");
        displaycontent(search_results);
      });
  }
}
searchinput.addEventListener("keydown", displaydetails);
