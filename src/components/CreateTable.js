import React,{useState} from 'react'
import AddRow from './AddRow'
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const CreateTable = ({props,data,setData}) => {
  const [rows,addRows]=useState([0])
  return (
    <Box>
        <Typography>{props}</Typography>
        <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
        <TableHead>
          <TableRow>
                <TableCell style={{border:'1px solid rgba(224, 224, 224, 1', borderCollapse:'collapse', padding: ['7px 5px', '!important']}}></TableCell>
                <TableCell style={{border:'1px solid rgba(224, 224, 224, 1', borderCollapse:'collapse', padding: ['7px 5px', '!important']}} >KEY</TableCell>
                <TableCell style={{border:'1px solid rgba(224, 224, 224, 1', borderCollapse:'collapse', padding: ['7px 5px', '!important']}} >VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              rows.map((row,index) => (
                <AddRow 
                  addRows={addRows}
                  rowId={index}
                  key={index}
                  data={data}
                  setData={setData}
                />
              ))
            }
        </TableBody>
      </Table>
    </Box>
  )
}

export default CreateTable
