import React, { useEffect, useState } from 'react';
import Results from '../Results/Results.jsx'
import Log from '../Log/Log.jsx'

function Input() {

    const [input, setInput] = useState("");
    const [validationClass, setValidationClass] = useState("invalid")
    const [counter, setCounter] = useState(0);
    const [results, setResults] = useState([])
    const [code, setCode] = useState(Array(4))

    const generateNewCode = () => {
        let digits = Array(10).fill().map((element, index) => index)
        let newCode = code;
        for( let i = 0; i < code.length; i++) {
            const newIndex = Math.floor(Math.random() * digits.length);
            const newDigit = digits[newIndex];
            newCode[i] = String(newDigit)
            digits.splice(newIndex, 1)
            console.log(newIndex, newDigit, digits, newCode)
        }
        setCode(newCode);
    }

    useEffect(() => {
        generateNewCode();
    }, []);

    useEffect(() => {
        // Check if something has been entered
        if(input === "") {
            setValidationClass("invalid");
            return;
        }

        // Get only the number components and check length
        const regex = /[0-9]/g;
        let integers = input.match(regex);
        integers = integers || [];
        setInput(integers.join(' - '))
        if (integers.length !== 4) {
            if (integers.length > 4) setInput(integers.slice(Math.max(integers.length - 4, 1)).join(' - '))
            setValidationClass("invalid");
            return;
        }

        // Check for multiples
        let maxCount = 0;
        integers.forEach((x) => {
            let count = 0;
            for (let i = 0; i < integers.length; i++) {
                count = x === integers[i] ? count + 1 : count;
            }
            if (count > maxCount) {
                maxCount = count;
            }
        })
        if (maxCount > 1) {
            setValidationClass("invalid");
            return;
        }

        setValidationClass("valid");
    }, [input]);

    useEffect(() => {
        if (validationClass === "invalid") return;
        //Compare input to code
        const inputDigits = input.match(/[0-9]/g)
        let result1 = 0;
        let result2 = 0;
        
        //Count number of digits in code
        inputDigits.map(digit => {
            if(code.includes(digit)) result1 += 1;
        });
        
        //Count number of digits in correct location
        inputDigits.map((digit, index) => {
            if(code[index] === digit) result2 += 1;
        });

        console.log("input: ", input, " | code: ", code, " | result: ", result1, result2)
        let newResults = results;
        newResults.push({input: input, output: result1 + " " + result2});
        setResults(newResults);
        setInput("")
    }, [counter])
    
    return (
        <>
            <div className='appHeader'
                data-testid='header'>
                {"\u03A8" //Unicode for Psi
                } 
            </div>
            <div className='inputDiv'>
                <input className={validationClass}
                    type='text'
                    data-testid={"input"}
                    value={input}
                    min={0}
                    onChange={e => setInput(e.target.value)}/>
                <button className={validationClass + "Btn"}
                    onClick={() => setCounter(counter + 1)}>
                    Submit
                </button>
            </div>
            <Results data={results} count={counter}/>
            <Log />
        </>
    )
}

export default Input;