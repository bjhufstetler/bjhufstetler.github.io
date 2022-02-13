import React from 'react'
import IndividualResults from '../IndividualResults/IndividualResults.jsx'

function Results({ data }) {
    return(
        <div className='results'>
            <div>{data.length > 0 ?
                <span className='individualResults'>Results</span>
            : ""}
        </div>
            <IndividualResults data={data} />
        </div>
    )
}

export default Results;