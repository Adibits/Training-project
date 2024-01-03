import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableBody, TableCell,TableContainer, TableRow, Paper } from '@mui/material'


const History = () => {
    const [data, setData] = useState([]);

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
  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 150, border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
                <TableCell style={{border:'1px solid rgba(224, 224, 224, 1', borderCollapse:'collapse', padding: ['7px 5px', '!important']}} >Method</TableCell>
                <TableCell style={{border:'1px solid rgba(224, 224, 224, 1', borderCollapse:'collapse', padding: ['7px 5px', '!important']}} >Url</TableCell>
          </TableRow>
        </TableHead>
          
        <TableBody>
            {data.map((key, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{key.method}</TableCell>
                <TableCell component="th" scope="row">{key.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
      </TableContainer>
    </div>
  )
}

export default History
