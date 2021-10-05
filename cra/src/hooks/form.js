import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react'
import { ButtonContainer, InputMain } from '../components/styled'
import { isValidHttpUrl } from '../utils';

function Form(){
    const [form, setForm] = useState();
    const [errorMsg, setErrorMsg] = useState(null);
    const [result, setResult] = useState({data: null, loading: false})
	const baseURL = process.env.REACT_APP_BACKEND_URL;

    const onChange = ({target})=>{
        const {name, value } = target;
        setForm({...form, [name]: value})
    }

    const submitRequest = useCallback(async (value)=>{
        console.log("value")
        const isValidUrl = isValidHttpUrl(value);
        if (!isValidUrl){
            setErrorMsg({first:'Invalid url', last:'Example of valid URL includes http://www.google.com or https://www.google.com'})            
            return;
        }

        setResult({...result, loading: true });

        const res = await axios.get(
        `${baseURL}/api/encode`, {
            params:{
                longUrl:value
            }
        });

        const data = await res.data;
        
        setResult({ data, loading: false });        

    })

    const onSubmit = ()=>{
        setErrorMsg(null);
        setResult({...result, data: null})
        if (form?.longUrl){
            submitRequest(form.longUrl);
        } else {
            // Enter valid url
            setErrorMsg({first:"Enter a valid url"})
        }
    }

    useEffect(()=>{

    }, [])

    return {onChange, onSubmit, errorMsg, form, result}
}

export default Form
