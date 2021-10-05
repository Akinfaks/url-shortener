import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import table from '../hooks/TableHook';
import { InputMain } from '../components/styled';


// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//   ];
  
  export default function TTable({Spinner, data, loading, onChange, onChangeSearch, form}) {
    
    return (

      <div style={{width: '80%', margin: 'auto'}}>

           {/* {!data?.length > 0 && loading && <Spinner />} */}
           <h4>Shortener List</h4>

           <InputMain 
            placeholder = "...Search"
            onChange = { onChangeSearch }
            // style={{ flexGrow: 1}}
            name = "search"
            value = { form?.search }
            
        />

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>Hash&nbsp;</TableCell>
                    <TableCell align="right">Long&nbsp;URL</TableCell>
                    <TableCell align="right">Short&nbsp;URL</TableCell>
                    <TableCell align="right">Hit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.hash}
                      </TableCell>
                      <TableCell align="right">{row.long}</TableCell>
                      <TableCell align="right">{row.short}</TableCell>
                      <TableCell align="right">{row.hit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

      </div>

    );
  }