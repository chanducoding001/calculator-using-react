import React,{useState} from "react";
import CalculatorHtml from "./CalculatorHtml";
import './App.css';
//App component
function App() {
  //using use state to update input value for every button click

  let [inputVal,setInput]=useState("");

  //in Calculatorhtml component for every button when onclick event is happening,calling display function which takes 
  //its innerHTML value as argument.

  function display(invalue){

    try{
//declared every button innerHTML in invalue parameter.
    //storing all the operators in operators array.

    let operators=["+","-","%","/","*","."];

    //finding whether any operator is there in inputVal i.e.input value using includes() method.

    let included=operators.includes(inputVal[inputVal.length-1]);

    //allowing to display values other than C,D,= using if condition.

    if(invalue!=="C"&&invalue!=="D"&&invalue!=="="){
    
      //if any operator is there in inputVal and if current button value is any operator then updating input value
      //as its value. which is indirectly doing not to add additional operator into the input value which saves from errors.
      
    //finding whether invalue i.e. button value is the value of any operator.

    let inValueincluded=operators.includes(invalue);
      if(included===true&&inValueincluded===true){
        setInput(inputVal);
      }else{            //if only one operator is there adding another operand.
        setInput(inputVal+invalue);
      }
    }
    //when = button is clicked.

    if(invalue==="="){
      
      //checking whether last char of input is any operator. such as 12+ 1+ because eval() cannot evaluate those expressions.
      if(included===true){  //if any operator found at the end, displaying that value only to prevent errors.
      setInput(inputVal)  
      }else{ //if operation is operatable syntactically then evaluating i.e. operand + operator + operand=operation. making the inputVal to become like this to perform operations without errors using eval().
      
        setInput(eval(inputVal));

    }
    }
    //when C button is clicked setting inputVal to null to show the clearance of everything
    if(invalue==="C"){
      setInput("");
    }
    //when D button is clicked, last element should be erased.
      if(invalue==="D"){
       // converting inputVal type from number to string.
        inputVal+="";
      //slicing last element of inputVal
        setInput(inputVal.slice(0,-1));
      }
    }catch(error){
      console.log(error);
      setInput(inputVal)
    }
    }
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      {/* taking a div for displaying output and giving inputVal to its inner html */}

      <div className="input-div">{inputVal}</div>

      {/* rendering Calculatorhtml component passing display function as prop */}

      <CalculatorHtml display={display}/>

    </div>
  );
  }
export default App;
