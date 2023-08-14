const minFirstNumber = document.querySelector("#minFirstNumber");
const minSecondNumber = document.querySelector("#minSecondNumber");
const minBtn = document.querySelector("#minBtn");

minBtn.addEventListener("click", () => {
  if (minFirstNumber.value > minSecondNumber.value) {
    alert(minSecondNumber.value);
  } else if (minFirstNumber.value < minSecondNumber.value) {
    alert(minFirstNumber.value);
  } else {
    alert("Числа рівні");
  }
});

const powFirstNumber = document.querySelector("#powFirstNumber");
const powSecondNumber = document.querySelector("#powSecondNumber");
const powBtn = document.querySelector("#powBtn");

powBtn.addEventListener("click", () => {
  let resault = 1;
  for (let i = 0; i < powSecondNumber.value; i++) {
    resault *= powFirstNumber.value;
  }
  alert(resault);
});

const fibNumber = document.querySelector("#fibNumber");
const fibBtn = document.querySelector("#fibBtn");

let fibonacci = [0, 1];

fibBtn.addEventListener("click", () => {
  for (i = 2; i < fibNumber.value; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  alert(fibonacci.slice(0, fibNumber.value));
});
