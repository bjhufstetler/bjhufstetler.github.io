import React, { useState, useEffect } from 'react'

function Log() {
    let newArray = Array(10);
    for(let i = 0; i < newArray.length; i++) {
        newArray[i] = Array(4)
    }
    const [styles, setStyles] = useState(newArray);
    const [updateCell, setUpdateCell] = useState([0,0]);

    useEffect(() => {
        let newStyles = [...styles];
        for(let i = 0; i < newStyles.length; i++) {
            for(let j = 0; j < newStyles[i].length; j++) {
                newStyles[i][j] = "grey"
            }
        }
        setStyles(newStyles);
        console.log(styles)
    }, [])

    const handleClick = (e, row, col) => {
        e.preventDefault();
        let newStyles = [...styles]
        const currentStyle = newStyles[row][col];
        switch(currentStyle) {
            case "grey":
                newStyles[row][col] = "red";
                break;
            case "red":
                newStyles[row][col] = "blue";
                break;
            case "blue":
                newStyles[row][col] = "green";
                break;
            case "green":
                newStyles[row][col] = "grey";
                break;
        }
        setStyles(newStyles);
    }

    return(
        <div className='log'>
            {styles.map((logRow, indexRow) => (
                <div key={indexRow}>
                    {logRow.map((logCol, indexCol) => (
                        <button className={styles[indexRow][indexCol]}
                            key={indexRow + "_" + indexCol}
                            onClick={(e) => handleClick(e, indexRow, indexCol)}>
                            {indexRow}
                        </button>
                    ))}
                </div>  
            ))}
        </div>
    )
}

export default Log;