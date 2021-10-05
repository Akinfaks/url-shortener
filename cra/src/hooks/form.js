import React from 'react'
import { ButtonContainer, InputMain } from '../components/styled'


function form() {

    const ShortenerRow = ()=>(
        <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative', width: '80%', margin: 'auto', marginBottom: '20px'}}>
            <InputMain 
                placeholder = "Enter a valid Url"
                style={{  flexGrow: 1}}/>


        
            <ButtonContainer>Submit</ButtonContainer>

        </div>
    )


    const ResultRow = ()=>(
        <div style={{display: 'flex', width: '80%', flexDirection: 'row', alignItems: 'center', borderBottom: '2px solid black', justifyContent: 'space-between', padding: '40px',  width: '80%', margin: 'auto', position: 'relative',  border: '1px solid blue', height: '100px', backgroundColor: 'aliceblue'}}>
            <div>http://www.google.com</div>
            <div>http://www.localhost:8000/U2YwS</div>
        </div>
    )

    return {ShortenerRow, ResultRow}
}

export default form
