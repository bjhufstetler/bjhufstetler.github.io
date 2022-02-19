import React, {useState} from 'react';
import styled from 'styled-components';
import './Number.css';

const NumberDiv = styled.div(({ color }) => `
        font-size: 35px;
        flex: 1 0 21%;
        margin-top: 3px;
        margin-bottom: 3px;
        margin-right: 3px;
        margin-left: 3px;
        background-color: ${color};
        border: 1px solid rgb(189, 189, 189);
        `);

function Number({ number, type, color}) {
    const [newColor, setNewColor] = useState("#EEEEE");

    const handleClick = (event) => {
        event.preventDefault();
        if (type === "note") {
            setNewColor(color);
        }
    };

    return(
        <NumberDiv onClick={event => handleClick(event)} color={newColor}>
            {number}
        </NumberDiv>
    );
};

export default Number;