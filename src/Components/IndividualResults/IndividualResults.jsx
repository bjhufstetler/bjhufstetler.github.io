import React from 'react'

function IndividualResults({ data }) {
    return(
        <>
            {data.map((x, index) => (
                <div key={"results" + index}>
                    <span className='resultIn'
                        key={"in" + index}>
                        {x.input}
                    </span>
                    <span className='resultOut'
                        key={"out" + index}>
                        {x.output}
                    </span>
                </div>
            ))}
        </>
    )
}

export default IndividualResults;