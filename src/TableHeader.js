import React from 'react'
import './TableHeader.css';

const table_header = () => {
    return (
        <div className='coin-fields'>
                <p>Name</p>
                <p>abbreviation</p>
                <p>Price</p>
                <p>Volume</p>
                <p>Percentage</p>
                <p>Market Cap</p>
            </div>
    )
}

export default table_header
