"use strict"

const bill = document.getElementById("bill");
const percentageBtns = Array.from(document.querySelectorAll(".checkboxes button"));
const percentageInput = document.getElementById("percentage");
const people = document.getElementById("numberPeople");
const errorElement = people.parentElement.previousElementSibling;
const tipValue = document.getElementById("tipValue");
const totalValue = document.getElementById("totalValue");
const reset = document.getElementById("reset");

function calculateTip(percentageValue) {
    const billValue = +bill.value;
    const peopleValue = people.value;

    if (peopleValue != "" && peopleValue != 0) {
        function addPercentage(percentage, bill) {
            return (percentage / 100) * bill;
        }
        const tip = addPercentage(percentageValue, billValue) / peopleValue;
        const total = (billValue + addPercentage(percentageValue, billValue)) / peopleValue;

        function formatNumber(number) {
            number.toFixed(2);
            number = number.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
            return number;
        }
        tipValue.innerText = formatNumber(tip);
        totalValue.innerText = formatNumber(total);
    }
}

function handleReset() {
    const condition = bill.value === "" && percentageInput.value === "" && people.value === "";
    condition ? reset.setAttribute("disabled", "") : reset.removeAttribute("disabled");
}

const inputs = [bill, percentageInput, people];
inputs.forEach(input => {
    input.addEventListener("input", (e) => {
        handleReset();

        e.target.value =  !!e.target.value && Math.abs(e.target.value) >= 0 ? Math.abs(e.target.value) : null


        if (e.target !== percentageInput) {
            if (percentageInput.classList.contains("active")) {
                calculateTip(percentageInput.value);
            } else {
                percentageBtns.forEach(percentageBtn => {
                    if (percentageBtn.classList.contains("active")) {
                        const number = +percentageBtn.innerText.replace("%", "");
                        calculateTip(number);
                    }
                });
            }
        } else {
            percentageBtns.forEach(btn => btn.classList.remove("active"));
            percentageInput.classList.add("active");
            calculateTip(percentageInput.value);
        }

        if (e.target === people) {
            if (people.value == "" || people.value == 0) {
                errorElement.style.display = "block";
                people.classList.add("error");
            } else {
                errorElement.style.display = "none";
                people.classList.remove("error");
            }
        }
    });
});

percentageBtns.forEach(percentageBtn => {
    percentageBtn.addEventListener("click", () => {
        const number = +percentageBtn.innerText.replace("%", "");
        calculateTip(number);

        percentageBtns.forEach(btn => btn.classList.remove("active"));
        percentageInput.classList.remove("active");
        percentageBtn.classList.add("active");
    });
});

reset.addEventListener("click", () => {
    inputs.forEach(input => {
        input.value = "";
        if (input === people && input.classList.contains("error")) {
            errorElement.style.display = "none";
            people.classList.remove("error");
        };
    });
    percentageBtns.forEach(btn => btn.classList.remove("active"));
    percentageBtns[2].classList.add("active");
    [tipValue, totalValue].forEach(element => element.innerText = "$0.00");
    handleReset();
});