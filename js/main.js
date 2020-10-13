const totalEl = document.getElementById("total");
const plusEl = document.getElementById("plus");
const middleEl = document.getElementById("middle");
const inputEl = document.getElementById("in");
const minusEl = document.getElementById("minus");
const btn = document.querySelectorAll("button");



let total = 0;
let input = 0;
totalEl.innerHTML = total;

plusEl.addEventListener('click', addition);
function addition() {
    input = inputEl.valueAsNumber;
    total = total + input;
    totalEl.innerHTML = total;
    ifNegative(total)
}

minusEl.addEventListener('click', subtraction);
function subtraction() {
    input = inputEl.valueAsNumber;
    total = total - input;
    totalEl.innerHTML = total;
    ifNegative(total);
}


function ifNegative(number) {
    if (number < 0) {
        totalEl.style.color = "red";
    } else {
        totalEl.style.color = "black";
    }
}