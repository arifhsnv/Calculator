const calculator = document.querySelector(".calculator")
const ChangeThemeButton = document.querySelector(".change-theme")
const display=document.querySelector(".display")
const inputOfNumber = document.querySelector(".display input")
const NumberInput = document.querySelectorAll("form .digital-numbers")
const calculation = document.querySelectorAll(".calculation")
const equalIndex = document.querySelector(".same")

console.log(NumberInput);
console.log(Array.from((NumberInput)));
ChangeThemeButton.addEventListener("click", function (e) {
    e.preventDefault()
    calculator.classList.toggle("dark-mode")
    NumberInput.classList.toggle("dark-mode")
display.classList.toggle("dark-mode")
inputOfNumber.classList.toggle("dark-mode")
calculation.classList.toggle("dark-mode")
equalIndex.classList.toggle("dark-mode")
})