import React from 'react';
import Row from '../Row/Row'
import './Results.css'

function Results({ results }) {
    //const notes = Array(10).fill().map((e, index) => Array(4).fill(index));

    return(
        <>
            <div className="results">
                <div className='heading'>Output</div>
                {results.map((row, index) => {
                    return(
                        <Row code={row} 
                            key={"Results_" + row + "_" + index}
                            type="result"
                            color=""/>
                    )
                })}
            </div>
        </>
    );
};

export default Results;