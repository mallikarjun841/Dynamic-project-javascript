let userinput = document.getElementById("userInput");
let unorderedlist = document.getElementById("keyCodeList");
let createlist = document.createElement("li");
unorderedlist.appendChild(createlist);

function display(unicode) {
  let createlist = document.createElement("li");
  createlist.textContent = unicode;
  unorderedlist.appendChild(createlist);
}

userinput.addEventListener("keydown", function (event) {
  display(event.keyCode);
});
