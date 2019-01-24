window.onload = function(){
  // Calculate Button click handler
  document.getElementById("calculate-button").onclick = function() {
    let tipAmoount = calculateTip();

    //Display the tip
    document.getElementById("total-tip").style.display = "block";
    document.getElementById("tip").innerHTML = tipAmoount;
  };
}

function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("service-quality").value;
  let numOfPeople = document.getElementById("peopleamt").value;

  // Validating the input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  // Checking to see if the input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Calculating tip
  let total = (billAmt * serviceQual) / numOfPeople;

  //  Rounding to two decimal places
  total = Math.round(total * 100) / 100;

  // Making sure we have two digits after decimal point
  total = total.toFixed(2);

  return total;
}
