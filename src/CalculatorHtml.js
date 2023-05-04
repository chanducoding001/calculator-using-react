import React from 'react'

    function CalculatorHtml({display}) {
    //receiving display function from App component and through object destructuring taking individual display from the props.
return (
    // adding onClick event to every button and calling display function for every button click. 
    <div>
            <div className='container'>
                <div className='row'>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>C</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>D</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>%</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}} className='right-corner'>/</button>
                </div>
                <div className='row'>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>8</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>9</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>7</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}} className='right-corner'>*</button>
                </div>
                <div className='row'>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>4</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>5</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>6</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}} className='right-corner'>-</button>
                </div>
                <div className='row'>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>1</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>2</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>3</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}} className='right-corner'>+</button>
                </div>
                <div className='row'>
                    <button className='zero' onClick={(e)=>{display(e.target.innerHTML)}}>0</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}}>.</button>
                    <button onClick={(e)=>{display(e.target.innerHTML)}} className='right-corner'>=</button>
                </div>
            </div>
        </div>
    
  )
}

export default CalculatorHtml;