import React,{useState} from 'react'
import { TableCell, TableRow ,Checkbox, TextField} from "@mui/material";

const AddRow = ({addRows,rowId,data,setData}) => {
  const [checkCheckBox,setCheckCheckBox]=useState(false);
  const handleChange = (e)=> {
    let result=data.filter(entry => entry.id===Number(e.target.name))[0];
    if(!checkCheckBox) {
      setCheckCheckBox(true)
      addRows(oldArr => [...oldArr, rowId]);
      result={...result,id: rowId, check: true};
    }
    else {
      setCheckCheckBox(false); 
      result ={...result,check:false};
    }
    let index=data.findIndex(value=>value.id===Number(e.target.name));
    if(index=== -1) {
      setData(oldArr => [...oldArr,result]);
    }
    else {
      const newArray = Object.assign([...data], {
        [index]:result
      })
      setData(newArray);
    }
    console.log(data);
  } 
  const onTextChange=(e) => {
    let result=data.filter(entry => entry.id===rowId)[0];
    result={...result,id: rowId, [e.target.name]: e.target.value};
    let index=data.findIndex(value=>value.id===rowId);
    if(index=== -1) {
      setData(oldArr => [...oldArr,result]);
    }
    else {
      const newArray = Object.assign([...data], {
        [index]:result
      })
      setData(newArray);
    }
    console.log(data);
  }
  return (
    <TableRow>
      <TableCell 
        style={{border:'1px solid rgba(224, 224, 224, 1', 
        borderCollapse:'collapse', 
        padding: ['7px 5px', '!important']}}>

        <Checkbox 
          checked={checkCheckBox}
          onChange={(e) => handleChange(e)}
          name={rowId}
        />
      </TableCell>
      <TableCell 
           style={{border:'1px solid rgba(224, 224, 224, 1',
           borderCollapse:'collapse',
            padding: ['7px 5px', '!important']}}>
            <TextField 
            name='key'
            onChange={(e) => onTextChange(e)}
            inputProps={{style: {height: 30,padding: '0 5px'}}}/>
      </TableCell>
      <TableCell style={{border:'1px solid rgba(224, 224, 224, 1',
             borderCollapse:'collapse',
             padding: ['7px 5px', '!important']}}>
             <TextField
              name='value'
              onChange={(e) => onTextChange(e)} 
              inputProps={{style: {height: 30,padding:'0 5px'}}}/>
      </TableCell>
    </TableRow>
  )
}

export default AddRow
