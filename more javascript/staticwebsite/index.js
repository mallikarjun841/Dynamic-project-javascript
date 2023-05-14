let wordCloud = [
  "Hello",
  "hii",
  "how",
  "what",
  "you",
  "yourself",
  "name",
  "victory",
  "food",
  "lovely",
  "beautiful",
  "written",
  "where",
  "who",
  "awesome",
];
let wordscontainer = document.getElementById("wordsContainer");
let userinput = document.getElementById("userInput");
let errormsg = document.getElementById("errorMsg");

function makesomevalues(item) {
  let createvalue = Math.ceil(Math.random() * 30) + 5 + "px";
  let createspan = document.createElement("span");
  createspan.textContent = item;
  createspan.style.fontSize = createvalue;
  createspan.classList.add("m-2");
  wordscontainer.appendChild(createspan);
}

let addbutton = document.getElementById("addBtn");

addbutton.onclick = function () {
  let userinputvalue = userinput.value;
  if (userinputvalue === "") {
    errormsg.textContent = "please enter correct text";
  } else {
    userinput.value = "";
    errormsg.textContent = "";
    makesomevalues(userinputvalue);
  }

  userinput.value = "";
};
for (let item of wordCloud) {
  makesomevalues(item);
}
