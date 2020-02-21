// calculate bill

function calculateBill() {
    let billAmt = document.getElementById("billamt").value;
    let serviceRate = document.getElementById("servicerate").value;
    let numPeople = document.getElementById("numpeople").value;

    // values must be inputed into the input section

    if (billAmt === "" || serviceRate === 0) {
        alert("please input values");
        return;
    }

    // check if the input is empty or is less than or equals to one

    // if (numPeople === "" || numPeople <= 1) {
    //     numPeople = 1;
    //     document.getElementById("totaltip").style.display = "none";
    // } else {
    //     document.getElementById("totaltip").style.display = "block";
    // }

    // claculate the bill sharing per person 

    let totalTip = (billAmt * serviceRate) / 100;

    // round it to 2 decimal places
    totalTip = totalTip.toFixed(2);

    // Display the totalTip
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = totalTip;

    // calculate for tip to be paid per person
    let tipShared = (totalTip / numPeople);

    // round it to 2 decimal places
    tipShared = tipShared.toFixed(2);

    // Display the tip to be shared
    document.getElementById("tipshared").style.display = "block";
    document.getElementById("shared").innerHTML = tipShared;

    // calculate for total bill
    let totalBill = (parseInt(billAmt)) + (parseInt(totalTip));

    // round it up to 2 decimal place
    totalBill = totalBill.toFixed(2);

    // Display for total bill
    document.getElementById("totalbill").style.display = "block";
    document.getElementById("bills").innerHTML = totalBill;

    // calculate for shared bill per person 
    let sharedBill = (totalBill / numPeople);

    // round it up to 2 decimal place
    sharedBill = sharedBill.toFixed(2);

    // Display for shared bill per person
    document.getElementById("sharedbill").style.display = "block";
    document.getElementById("share").innerHTML = sharedBill;
}
// click to call function
document.getElementById("calbtn").onclick = function() {
    calculateBill();
};