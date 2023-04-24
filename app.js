let buttonPlus = document.getElementById("buttonPlus")
let buttonMinus = document.getElementById("buttonMinus")
let count = document.getElementById("buttonNumber")
let number = 0

buttonPlus.onclick = function() {
    if (number <= 100) {
        number++
        count.innerHTML = number
    }
}
buttonMinus.onclick = function() {
    if (number >= 1) {
        number--
        count.innerHTML = number
    }
}