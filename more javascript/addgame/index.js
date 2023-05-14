let firstnumber = document.getElementById("firstNumber");
let secondnumber = document.getElementById("secondNumber");
let inputvalue = document.getElementById("userInput");
let message = document.getElementById("gameResult");
let message1 = "Congratulations! You got it right.";
let message2 = "Please Try Again!";

function restart() {
  let first = Math.random() * 100;
  let second = Math.random() * 100;
  let firstround = Math.ceil(first);
  let secondround = Math.ceil(second);
  firstnumber.textContent = firstround;
  secondnumber.textContent = secondround;
  inputvalue.value = "";
  message.textContent = "";
}
restart();

function check() {
  let firstrand = parseInt(firstnumber.textContent);
  let secondrand = parseInt(secondnumber.textContent);
  let sum = firstrand + secondrand;
  let userinputvalue = parseInt(inputvalue.value);
  if (sum === userinputvalue) {
    message.textContent = message1;
    message.style.backgroundColor = "#028a0f";
  } else {
    message.textContent = message2;
    message.style.backgroundColor = "#1e217c";
  }
}
