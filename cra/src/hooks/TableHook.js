import React, {useState, useEffect, useCallback } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';

function TableHook() {

	const baseURL = process.env.REACT_APP_BACKEND_URL;

    const [state, setState] = useState({
        data: [],
        loading: false,
    });
    
    // function createData(long, short, hit) {
    //     return { long, short, hit };
    // }

    const Spinner =  (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
    );
    
    const getList = useCallback(async ()=>{

        console.log("getList")
        setState({ loading: true });

        const res = await axios(
        `${baseURL}/api/list`
        );

        const data = await res.data;
    
        setState({ data, loading: false });        
    
    })
    
    useEffect(() => {
        getList();
    }, [])

    //   const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //   ];
          
    return { Spinner, getList, ...state }

}

export default TableHook;