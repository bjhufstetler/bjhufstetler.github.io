import React, { useState } from 'react';
import Row from '../Row/Row';
import './Notes.css';
import '../../App.css';

function Notes() {
    const notes = Array(10).fill().map((e, index) => Array(4).fill(index));
    const [color, setColor] = useState('#EEEEEE');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return(
        <>
            <div className="note-board">
                <div className='heading'>Notes</div>
                {notes.map((row, index) => {
                    return(
                        <Row code={row} 
                            key={"Notes_" + row + "_" + index}
                            type="note"
                            color={color}/>
                    )
                })}
                <input className='colorPicker' type="color" onChange={event => handleChange(event)} value={color}/>
            </div>
        </>
    );
};

export default Notes;