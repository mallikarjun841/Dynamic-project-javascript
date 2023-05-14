let billamount = document.getElementById("billAmount");
let percentageOfTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalamount = document.getElementById("totalAmount");
let error = document.getElementById("errorMessage");
let message = " Please Enter a Valid Input.";

function calculateTip() {
  let billamountvalue = billamount.value;
  let percentagevalue = percentageOfTip.value;
  if (billamountvalue === "") {
    error.textContent = message;
  } else if (percentagevalue === "") {
    error.textContent = message;
  } else {
    error.textContent = "";
    let bill = parseInt(billamountvalue);
    let per = parseInt(percentagevalue);
    let calculate = (bill / 100) * per;
    tipAmount.value = calculate;
    let amount = bill + parseInt(tipAmount.value);
    totalamount.value = amount;
  }
}
