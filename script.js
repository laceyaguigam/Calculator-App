
const display = document.getElementById("display");  // for display at the top
const lastExpression = document.getElementById("last-expression");  // for display at bottom to show the last expression
const button = document.getElementsByClassName("calculator-button"); // for each button on the calculator 




// show numbers after pressed 
    // id = display

//be able to add multiple numbers together including repeat 



function showDisplay() {

}

//will also need a function to update the display 

function displayUpdate() {

}



// buttons for numbers 0-9
    // id = button-(insert #)




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
        value1 + value2 == display.value;  //not sure if this is even correct
        break;

    case "-":

        break;

    case "*":

        break;

    case "/":

        break;

    case "=":

        break;

    default:
        console.log("ERROR");
}