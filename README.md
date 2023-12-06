# Calculator-App


The user should be able to enter a simple expression:
The user should be able to choose the first number, which should appear in the expression box.
The user should be able to choose the desired operation (addition, subtraction, multiplication, division) and the appropriate operator should appear in the expression box.
The user should be able to choose the second number, which should appear in the expression box.
The user should not be able to choose an operation before adding the first number.
The user should be able to see the calculation result after clicking an equals button.
The user should be able to clear the expression after clicking a clear button.
The user should not be able to pad with zeroes.
Essentially, ignore more than one zero without any other number being entered.
Valid: 0
Invalid: 00, 001, 00009, etc.
All calculator buttons except for “clear” should be disabled after the expression has been evaluated (the “equals” button has been pressed).
You should re-enable the buttons after the user clicks the “clear” button again.
The calculator display should be updated in real-time, showing the numbers and the operator as the user clicks the buttons.
For example, if I was entering 55 + 123 and then “equals” the display should go through these states:
5
55
55 +
55 + 1
55 + 12
55 + 123
55 + 123 = 178
You should keep track of the last expression and the result of the last expression, which should persist after a page refresh.
You may choose to use local or session storage for this.
This should update as soon as the “equals” button is pressed.
Rubric
