let hourinput = document.getElementById("hoursInput");
let mininput = document.getElementById("minutesInput");
let button = document.getElementById("convertBtn");
let bgcontainer = document.getElementById("bgcontainer");
let error = document.getElementById("errorMsg");

let createanswercontainer = document.createElement("div");
createanswercontainer.classList.add("ml-3");
createanswercontainer.id = "cont";
bgcontainer.appendChild(createanswercontainer);

let createpara = document.createElement("p");
createpara.classList.add("answer", "text-center", "mt-1");
createpara.id = "timeInSeconds";
createanswercontainer.appendChild(createpara);
button.addEventListener("click", function () {
  if (hourinput.value === "") {
    error.textContent = "please enter valid number of hours";
    createanswercontainer.classList.remove("answercontainer");
    createpara.textContent = "";
  } else if (mininput.value === "") {
    error.textContent = "please enter valid number of minutes";
    createanswercontainer.classList.remove("answercontainer");
    createpara.textContent = "";
  } else {
    let hours = parseInt(hourinput.value);
    let min = parseInt(mininput.value);
    let convertmin = hours * 60;
    let allmin = convertmin + min;
    let seconds = allmin * 60;
    bgcontainer.appendChild(createanswercontainer);
    createanswercontainer.classList.add("answercontainer");
    createpara.textContent = seconds + "s";
    error.textContent = "";
  }
});
