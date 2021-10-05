import React from 'react'
import { ButtonContainer, InputMain } from '../components/styled';
import FormLayout from '../hooks/Form'
import { textToHTML } from '../utils';

const ShortenerRow = ({onChange, form, onSubmit})=>(
    <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative', width: '80%', margin: 'auto', marginBottom: '20px'}}>
        <InputMain 
            placeholder = "Enter a valid Url"
            onChange = { onChange }
            // style={{ flexGrow: 1}}
            name = "longUrl"
            value = { form?.longUrl }
        />
            
        <ButtonContainer
            onClick = { onSubmit }
        >Submit</ButtonContainer>

    </div>
);

const ResultRow = ({result})=>(
    <div style={{display: 'flex', width: '80%', flexDirection: 'row', alignItems: 'center', borderBottom: '2px solid black', justifyContent: 'space-between', padding: '40px',  width: '80%', margin: 'auto', position: 'relative',  border: '1px solid blue', height: '100px', backgroundColor: 'aliceblue'}}>
        {/* <div>http://www.google.com</div>
        <div>http://www.localhost:8000/U2YwS</div> */}
        <div>{result?.short}</div>
        <div>{result?.long}</div>
    </div>
)

const Err = ({first, last})=>(
    <div>
        {first && <span style={{color: 'red'}}>{first}&nbsp;&nbsp;</span>}{last} 
    </div>
)

function ShortenerForm() {

    const { onChange, onSubmit, errorMsg, form, result } = FormLayout();

    console.log("Result", result.data);

    return (
        <div style={{position: 'relative'}}>
            <ShortenerRow 
                onChange = { onChange } 
                onSubmit = { onSubmit }
                form = { form }
            />
            
            {result.data  && <ResultRow 
                result = { result.data }
            />}

            {result.loading && <p>...loading</p>}
            
            {errorMsg && <Err {...errorMsg} />}

        </div>
    )
}

export default ShortenerForm
