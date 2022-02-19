import React from 'react';
import './Game.css'
import Board from '../Board/Board';
import Notes from '../Notes/Notes';
import Results from '../Results/Results';

function Game({ codeHistory, results }) {
    return(
        <div className='Game'>
            <div className='Board'>
                <Board 
                    codeHistory={codeHistory}
                    results={results}/>
            </div>
            <div className='Results'>
                <Results results={results} />
            </div>
            <div className='Notes'>
                <Notes />
            </div>
        </div>
    );
};

export default Game;