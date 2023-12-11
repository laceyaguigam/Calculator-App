// The user should not be able to choose an operation before adding the first number.

 // The user should not be able to pad with zeroes.

 // Essentially, ignore more than one zero without any other number being entered.
 // Valid: 0
 // Invalid: 00, 001, 00009, etc.

// All calculator buttons except for “clear” should be disabled after the expression has been evaluated (the “equals” button has been pressed).

    //  button.setAttribute("disabled", "");

 // You should re-enable the buttons after the user clicks the “clear” button again.

    // re-enable buttons --> button.removeAttribute("disabled");





//this will show/update the numbers in the display 
function display (value) {
    const topDisplay = document.getElementById('display');
    topDisplay.value += value;
}

// this will clear the top display
function clearDisplay() {
    const topDisplay = document.getElementById("display");   
    topDisplay.value = " ";
}



//this calculates the expressions 
function calculate() {
    const topDisplay = document.getElementById('display');
    try {
        topDisplay.value = eval(topDisplay.value);  //eval will calculate the expression for you!
        localStorage.setItem('topDisplay', topDisplay.value)
    } catch (error) {
        topDisplay.value = "Error";
    }
localStorage.getItem('topDisplay');
}


//this sets up the buttons 

const buttons = document.querySelectorAll(".calculator-button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === "C") {
            clearDisplay();
        } else if (button.textContent === "=") {
            bottomDisplay();
            calculate();     
        } else {
            display(button.textContent);
        }
    });
});



//this is the bottom display 
 


function bottomDisplay () {
    let bottom = document.getElementById('display').value;
    let display = document.getElementById('last-result-display');

    document.getElementById('last-result-display').value = bottom;
       localStorage.setItem('display', display.value);
       
};

//ask for help doesnt work
window.onload = (event) => {
    display.value = localStorage.getItem("display");
}


// working on the code for the buttons 



// function disableButtons () {
//     const buttons = document.querySelectorAll(".calculator-button");

//     if (no operator before number) {

//     } else if (no double 0) {

//     } else if( disable button when =) {
//         button.setAttribute("disabled", "");
//     } else (re-enable for clear) {
//         button.removeAttribute("disabled");
//     }
// };





 


button.onclick = function () {
    if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "%") {

    } else if (button.textContent === "0") {

    } else if (button.textContent === "=") {
        button.setAttribute("disabled", "");
    } else if (button.textContent === "C") {
        button.removeAttribute("disabled");
    } 
};



 
input.addEventListener("input", () => {
    if (input.value.length > 0 ) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }


});

disable () {
    switch (buttonDisable) {
        case '0': 
            document.querySelectorAll(".calculator-button").disabled = 'true'
        break;
        case '+': 

        break;
        case '-': 

        break;
        case '*': 

        break;
        case '%': 

        break;
        case '=': 
            document.querySelectorAll(".calculator-button").disabled = 'true'
        break;
        case 'C': 
            document.querySelectorAll(".calculator-button").disabled = 'false'
        break;
        default:
            return
    }
}