import React from 'react';
import './Row.css'
import Number from '../Number/Number'

function Row({ code, type, color }) {
    return(
        <div className='Row'>
            {code.map((number, index) => {
                return(
                    <Number number={number} key={"1_" + index} type={type} color={color}/>
                )
            })}
        </div>
    );
};

export default Row;