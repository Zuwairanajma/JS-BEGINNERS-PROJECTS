const number = document.querySelector(".number");
const button = document.querySelector(".generate");

button.addEventListener("click", generateNumber);
window.addEventListener("load", generateNumber);
    function generateNumber() {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        number.innerHTML = randomNumber;
    }
// add.addEventListener("click", function() {
//     count.innerHTML++;
// });



