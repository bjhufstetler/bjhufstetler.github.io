import React from 'react';
import './Board.css';
import '../../App.css';
import Row from '../Row/Row';

function Board({ codeHistory }) {
    return(
        <div className="board">
            <div className='heading'>Input</div>
            {codeHistory.map((row, index) => {
                return(
                    <Row code={row} 
                        key={"Board_" + row + "_" + index}
                        type="board"
                        color=""/>
                );
            })}
        </div>
    );
};

export default Board;