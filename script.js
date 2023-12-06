
const display = document.getElementById("display");  // for display at the top
const lastExpression = document.getElementById("last-expression");  // for display at bottom to show the last expression
const numberButton = document.getElementsByClassName("number-button"); // for each button on the calculator 
const operatorButton = document.getElementsByClassName("operator-button"); // for each button on the calculator 
const clearButton = document.getElementsByClassName("clear-button"); // for each button on the calculator 
const equalButton = document.getElementsByClassName("equal-button"); // for each button on the calculator 



const expressionDisplay = document.getElementById("last-result-display");  // to show the last expression

let value1 = " "; //variable that will be filled when a number is selected
let value2 = " "; //variable that will be filled when a number is selected
let result = " "; // this will be the answer to the expression








// show numbers after pressed 
    // id = display

//be able to add multiple numbers together including repeat 



function showDisplay() {

        //this will need .innerText
display.innerText = display?
}

//will also need a function to update the display 

function displayUpdate(value) {
    display.value += value;         //not sure if this will work, supposed to add numbers to display to update 
}                                   // do I have to add the display variable as well?



// buttons for numbers 0-9
    // id = button-(insert #) class for all buttons calculator-button




//button for +, -, /, *
    // id = button-plus,  id = button-minus, id = button-multiply id = button-divide 


//button for equal 
    // id = equals

function calculate () {

}

//button to clear 
    // id = button-clear
                            // not sure if it works yet
    function clearDisplay() {
        const clear = document.getElementById("clear-button");
        clear.value = " ";
    }

//show last equation 
    // id = last-result



function showExpression () {

}






switch(value1, value2) {
    case "+":
        value1 + value2 == result;  //not sure if this is even correct
        console.log(display.value)
        break;

    case "-":
        value1 - value2 == result;  //not sure if this is even correct
        console.log(display.value)
        break;

    case "*":
        value1 * value2 == result;  //not sure if this is even correct
        console.log(display.value)
        break;

    case "/":
        value1 % value2 == result;  //not sure if this is even correct
        console.log(display.value)
        break;

    case "=":
                    //not sure what would go here
        break;

    default:
        console.log("ERROR");
}










// The user should be able to enter a simple expression:

// The user should be able to choose the first number, which should appear in the expression box.

// The user should be able to choose the desired operation (addition, subtraction, multiplication, division) and the appropriate operator should appear in the expression box.

// The user should be able to choose the second number, which should appear in the expression box.

// The user should not be able to choose an operation before adding the first number.

// The user should be able to see the calculation result after clicking an equals button.

// The user should be able to clear the expression after clicking a clear button.

// The user should not be able to pad with zeroes.

// Essentially, ignore more than one zero without any other number being entered.
// Valid: 0
// Invalid: 00, 001, 00009, etc.

// All calculator buttons except for “clear” should be disabled after the expression has been evaluated (the “equals” button has been pressed).

// You should re-enable the buttons after the user clicks the “clear” button again.

// The calculator display should be updated in real-time, showing the numbers and the operator as the user clicks the buttons.

// You should keep track of the last expression and the result of the last expression, which should persist after a page refresh.

// You may choose to use local or session storage for this.

// This should update as soon as the “equals” button is pressed.

