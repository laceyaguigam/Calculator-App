
const display = document.getElementById("display");  // for display at the top
const lastExpression = document.getElementById("last-expression");  // for display at bottom to show the last expression
const button = document.getElementsByClassName("calculator-button"); // for each button on the calculator 
const expressionDisplay = document.getElementById("last-result-display");  // to show the last expression

let value1 = " "; //variable that will be filled when a number is selected
let value2 = " "; //variable that will be filled when a number is selected
let result = " "; // this will be the answer to the expression

// show numbers after pressed 
    // id = display

//be able to add multiple numbers together including repeat 



function showDisplay() {

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
        const clear = document.getElementById("button-clear");
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