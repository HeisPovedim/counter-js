"use strict";

// Get the count from localStorage or set it to 0 if it doesn't exist
let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;

// Get the elements from the DOM
const warning = document.getElementById("warning");
const counter = document.getElementById("counter");
const btnInc = document.getElementById("btn_inc");
const btnDec = document.getElementById("btn_dec");

// Update the counter element with the current count
const updateCount = () => {
  counter.textContent = count;
  localStorage.setItem("count", count);
};

// Add event listeners to the buttons
btnInc.addEventListener("click", () => {
  if (count < 10) {
    count++;
    updateCount();
  } else if (count >= 10) {
    warning.style.display = "block";
    warning.textContent = "Число не может быть больше 10!";
    return;
  }

  if (warning.style.display == "block" && count > -5) {
    warning.style.display = "none";
    return;
  }

  return;
});

btnDec.addEventListener("click", () => {
  if (count > -5) {
    count--;
    updateCount();
  } else if (count <= -5) {
    warning.style.display = "block";
    warning.textContent = "Число не может быть меньше -5!";
    return;
  }

  if (warning.style.display == "block" && count < 10) {
    warning.style.display = "none";
    return;
  }

  return;
});

// Update the counter element with the current count
if (count <= -5) {
  warning.style.display = "block";
  warning.textContent = "Число не может быть меньше -5!";
  updateCount();
} else if (count >= 10) {
  warning.style.display = "block";
  warning.textContent = "Число не может быть больше 10!";
  updateCount();
}

