import React, {useContext} from 'react';

function Palette() {
    const colors = ['default', 'red', 'green', 'blue'];
    

    return(
        <>
            {colors.map(color => {
                return(<div className="color" key={color}></div>);
            })}
        </>
    );
};

export default Palette;