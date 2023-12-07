// The user should not be able to choose an operation before adding the first number.

 // The user should not be able to pad with zeroes.

 // Essentially, ignore more than one zero without any other number being entered.
 // Valid: 0
 // Invalid: 00, 001, 00009, etc.

// All calculator buttons except for “clear” should be disabled after the expression has been evaluated (the “equals” button has been pressed).

    //  button.setAttribute("disabled", "");

 // You should re-enable the buttons after the user clicks the “clear” button again.

    // re-enable buttons --> button.removeAttribute("disabled");

 // You should keep track of the last expression and the result of the last expression, which should persist after a page refresh.

 // You may choose to use local or session storage for this.

//    localStorage.setItem() --> takes a key-value pair and adds it to local storage
//     localStorage.getItem() --> takes a key and returns the corresponding value



// bottomDisplay.innerText = localStorage.getItem('?')


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
    } catch (error) {
        topDisplay.value = "Error";
    }
}

//this sets up the buttons 

const buttons = document.querySelectorAll(".calculator-button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === "C") {
            clearDisplay();
        } else if (button.textContent === "=") {
            calculate();
        } else {
            display(button.textContent);
        }
    });
});


//this is the bottom display 
    //needs to use local storage


        //this doesnt work, thought it worked like top display
// function bottomDisplay (value) {
//     let lastExpression = document.getElementById('last-result-display');
//    let topDisplay = document.getElementById("display");
//      lastExpression =  topDisplay.value;
//     // lastExpression.value += value;
// }





 


