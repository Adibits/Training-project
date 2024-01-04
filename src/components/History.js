import React, { useContext, useEffect, useState } from 'react'
import { Table, TableHead, TableBody, TableCell,TableContainer, TableRow, Paper } from '@mui/material'
import DataProvider, { DataContext } from '../context/DataProvider';


const History = () => {
    const [data, setData] = useState([]);
    const {formData,setFormData,setTestJson}=useContext(DataContext);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8081/data/get');
          if (response.ok) {
            const result = await response.json();
            setData(result);
          } else {
            console.error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);
    const onSendClick = (url) => {
        setFormData({...formData,url:url})
        console.log(formData.url);
    } 
  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150, border: '1px solid rgba(224, 224, 224, 1)'}} aria-label="simple table">
        <TableHead>
          <TableRow>
                <TableCell style={{border:'1px solid rgba(224, 224, 224, 1', borderCollapse:'collapse',background:'#1976d2', padding: ['7px 5px', '!important']}} >Method</TableCell>
                <TableCell style={{border:'1px solid rgba(224, 224, 224, 1', borderCollapse:'collapse' , alignItems:"center", background:'#1976d2',padding: ['7px 5px', '!important']}} >Url</TableCell>
          </TableRow>
        </TableHead>
          
        <TableBody>
            {data.map((key, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" style={{border:'1px solid rgba(224, 224, 224, 1', borderCollapse:'collapse', padding: ['7px 5px', '!important']}} >{key.method}</TableCell>
                <TableCell onClick={() =>onSendClick(key.url)} component="th" scope="row" style={{border:'1px solid rgba(224, 224, 224, 1',cursor:'pointer', borderCollapse:'collapse', justifyContent:'center' ,padding: ['7px 5px', '!important']}}>{key.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
      </TableContainer>
    </div>
  )
}

export default History
