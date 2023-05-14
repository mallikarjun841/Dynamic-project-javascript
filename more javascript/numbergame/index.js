let userinput = document.getElementById("userInput");
let textresponse = document.getElementById("fact");

function displaynumberform(event) {
  if (event.key === "Enter") {
    let input = userinput.value;
    if (input === "") {
      alert("please enter number");
    } else {
      let options = {
        method: "GET",
      };
      let url = "https://apis.ccbp.in/numbers-fact?number=" + input;
      fetch(url, options)
        .then(function (response) {
          return response.json();
        })
        .then(function (finddata) {
          textresponse.textContent = finddata.fact;
          userinput.value = "";
        });
    }
  }
}
userinput.addEventListener("keydown", displaynumberform);
