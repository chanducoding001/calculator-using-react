In Calculatorhtml component for every button when onclick event is happening,calling display function which takes its innerHTML value as argument.
 in display funtion i have taken opeators array where all operators of this project are present.
 in this project used useState to update value of output.
 i have used many if conditions to prevent errors arising from eval() as it could not do operations such as 12**3, 12++3, *12, 12/ etc.
 This calculator wont let you give multiple operands at one time such as if 12+ is there if you click on any operator it wont add to the display.
 Display function from calculatorhtml page takes each button inner html value as argumentso that if value is c/d/= ,the condition wont allow you to display them.
 if value is C then the display is null because i have set the setinput state to null.
 if value is D it is slicing last character of the display string.
 when you do operation basically eval will give you number type output. so if you click D it will not slice but throw errors.
 so i converted it to string and sliced it.
 if you click on = then it will evaluate the received display value to number type output.
 i have added animation of font color change property to title tag to look good and background changing colors on hover to buttons.
 finally calculatorhtml component which contains all the buttons is rendered in App component give display as prop to child component.
