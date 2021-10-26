import React, { Component, useState } from 'react';
import '../Calculator/Calculator.css';


export default function Calculator() {
    const [number, setNumber] = useState(
        {
            number1:"",
        }
    )

    const[result,setResult]=useState("")
    
    const[isfinish,setFinish]=useState(false)

    const [calc,setCalc] = useState("")

    const handleClick = (value) => {setNumber({
        numberTmp:value.target.value,
        number1:number.number1+value.target.value,
        calc:number.number1+value.target.value,
    }); 
      console.log(number)  
    }

    function handleReset(e){
        e.preventDefault();
        setNumber({calc:"",
        number1:""  })
        setResult({result:""})
        console.log(number)
        setFinish(false)
    }

    function getEval(){
        setResult({
            result:eval(number.calc),
        })        
        console.log(result)
    }

    function isFinish(){
        setFinish(true);
    }

    function fireboth(){
        isFinish();
        getEval();        
    }

    return(<div className="calculatorBody">
    <div className="inputCalcDiv">
        <input placeholder="00000000" className="inputCalc" type="text" value={!isfinish ? number.calc : result.result}/>
        <div className="buttonsContainer">
            <div className="rowButton">
                <button className="button-78" role="button" value="+" onClick={handleClick}>+</button>
                <button className="button-78" role="button"    name="btn1" value="1" id="1"  onClick={handleClick}>1</button>
                <button className="button-78" role="button"   name="btn2" value="2" id="2"  onClick={handleClick}>2</button>
                <button className="button-78" role="button"  name="btn3" value="3" id="3" onClick={handleClick}>3</button>
            </div>
            <div className="rowButton">
                <button className="button-78" role="button" value="-" onClick={handleClick}>-</button>
                <button className="button-78" role="button"  name="btn4" value="4" id="4" onClick={handleClick}>4</button>
                <button className="button-78" role="button"   name="btn5" value="5" id="5" onClick={handleClick}>5</button>
                <button className="button-78" role="button"  name="btn6" value="6" id="6" onClick={handleClick}>6</button>
            </div>
            <div className="rowButton">
                <button className="button-78"  name="btnX" role="button" value="*" onClick={handleClick}>X</button>
                <button className="button-78"   name="btn7" role="button" value="7" id="7" onClick={handleClick}>7</button>
                <button className="button-78"  name="btn8" role="button" value="8" id="8" onClick={handleClick}>8</button>
                <button className="button-78"   name="btn9" role="button" value="9" id="9" onClick={handleClick}>9</button>
            </div> 
            <div className="rowButton">
                <button className="button-78" role="button" onClick={handleClick} value=":">:</button>
                <button className="button-78" role="button" onClick={handleReset}>C</button>
                <button className="button-78" role="button" value="0" id="0" onClick={handleClick}>0</button>
                <button className="button-78" role="button" onClick={fireboth}>=</button>
            </div>    
        </div>      
    </div>
</div>
)
        
};