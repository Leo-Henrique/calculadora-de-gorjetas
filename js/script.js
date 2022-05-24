"use strict";

const number = document.getElementById("adviceNumber");
const quote =  document.querySelector(".advice-quote");
const btn =  document.querySelector(".advice-btn");

function getRandomAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        number.innerText = `#${data.slip.id}`;
        quote.innerText = data.slip.advice;
    });
}
getRandomAdvice();
btn.addEventListener("click", getRandomAdvice);