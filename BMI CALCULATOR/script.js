// BMI = kg/m2
// Normal = 18.5-24.9
// Underweight = < 18.5
// overweight = 25-29.9
// obese = 30 and above

"use strict";

const btn = document.querySelector(".btn"),
form = document.querySelector("form"),
reset = document.querySelector(".reset"),
result = document.querySelector(".result"),
heightInput = document.getElementById("height"),
weightInput = document.getElementById("weight");

form.addEventListener("submit", validateInput)

function validateInput(e) {
    //alert("sqelgrieeerrr")
    e.preventDefault();
    let height = heightInput.value;
    let weight = weightInput.value;
    // display reset button
     reset.style.display = "block";
     result.style.display = "block";


    //validate input
    if(height === "") {
        return result.textContent = "Please enter a valid height!"
    } else if (weight === "") {
        return result.textContent = "Please enter a valid weight!"
    } else {
         result.innerHTML = `
            <div class = "loader-div">
            <img class= "loader" src = "./images/loader.gif"
            alt = "Loading...">
            </div> `
            ;

            setTimeout(() => {
                calculateBMI(height, weight);
            }, 1000);
        
        //console.log("okay");
    }
}
//Calculate BMI

function calculateBMI(height, weight) {
    // Convert height to meters
    height= height / 100;

    let bmi = (weight/Math.pow(height, 2)).toFixed(1);
    console.log(bmi);
    // Categorize result
    if (bmi < 18.5) {
        showResult(`Underweight: <span>${bmi}</span>`,  "orange");
    } else if (bmi  >= 18.5 && bmi < 24.9) {
        showResult(`Normal: <span>${bmi}</span>`,  "green");
    } else if (bmi  >= 25.0 && bmi < 29.9) {
        showResult(`Overweight: <span>${bmi}</span>`,  "purple");
    } else { showResult(`Obese: <span>${bmi}</span>`,  "red");

    }
}


// Show Result
function showResult(val, color) {
    result.style.backgroundColor = color;
    return (result.innerHTML = val);
}
reset.addEventListener("click", () => {
    form.reset()
    result.style.display = "none";
    reset.style.display = "none";
});