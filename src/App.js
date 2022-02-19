import React, {useState, useEffect} from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Game from './Components/Game/Game';

function App() {
  const [codeActual, setCodeActual] = useState(Array(4))
  const [codeHistory, setCodeHistory] = useState(Array(6).fill().map(e => Array(4).fill("")));
  const [results, setResults] = useState(Array(6).fill().map(e => Array(2).fill("")));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  useEffect(() => {
    //Generate the random code
    let digits = Array(10).fill().map((element, index) => index);
    let newCode = [...codeActual]; 
    for (let i = 0; i < newCode.length; i++) {
      const newIndex = Math.floor(Math.random() * digits.length);
      const newDigit = digits[newIndex];
      newCode[i] = String(newDigit);
      digits.splice(newIndex, 1);
    };
    setCodeActual(newCode)

  }, []);

  useEffect(() => {
    console.log(codeActual)
  }, [codeActual])

  useEffect(() => {
  }, [codeHistory])

  const handleKeyPress = (event) => {
    let newCol = currentCol;
    if (event.key === "Backspace" && currentCol !== 0) {
      const newCol = currentCol - 1;
      let newHistory = [...codeHistory];
      newHistory[currentRow][newCol] = "";
      setCurrentCol(newCol);
      setCodeHistory(newHistory);
      return;
    }

    if (event.key === "Enter" && currentCol === 4) {
      handleSubmitCode();
      return;
    }

    if (!isNaN(event.key) && currentCol < 4 && !codeHistory[currentRow].includes(event.key)) {
      let newHistory = [...codeHistory];
      newHistory[currentRow][currentCol] = event.key;
      setCodeHistory(newHistory);

      newCol = currentCol + 1;
      setCurrentCol(newCol);
    }
  }

  const handleSubmitCode = () => {
    const code = codeHistory[currentRow];
    let result1 = 0;
    let result2 = 0;
    code.forEach((x, index) => {
      if(codeActual.includes(x)) result1 += 1;
      if(codeActual[index] === x) result2 += 1;
    })
    
    let newResults = [...results];
    newResults[currentRow] = [result1, result2];
    setResults(newResults);

    let newRow = currentRow + 1;
    setCurrentRow(newRow);
    setCurrentCol(0);


  }

  return (
    <div className="App" 
    onKeyDown={handleKeyPress}
    tabIndex="-1">
      <Navbar />
      <Game 
        codeHistory={codeHistory}
        results={results}/>
    </div>
  );
};

export default App;
