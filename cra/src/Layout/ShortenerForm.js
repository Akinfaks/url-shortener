import React from 'react'
import form from '../hooks/form'

function ShortenerForm() {

    const { ShortenerRow, ResultRow } = form();

    return (
        <div style={{position: 'relative'}}>
            <ShortenerRow />
            <ResultRow />
        </div>
    )
}

export default ShortenerForm
