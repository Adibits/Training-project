import React, {useContext} from 'react'
import {Box,Select, MenuItem, TextField,Button} from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Form = ({onSendClick}) => {
  const {formData,setFormData}=useContext(DataContext);
  const handleChange = (e) => {
     setFormData({...formData,type: e.target.value});
  }
  const onUrlChange= (e) => {
    setFormData({...formData,url: e.target.value })
  }
  return (
    <Box style={{alignItems: 'center' , display:'flex', width: '100%', justifyContent:'space-between'}}>
        <Select
            value={formData.type}
            label="Age"
            style={{width:150,height:40,fontSize:'large',background:'#1976d2',justifyContent:'center',color:'#FFFFF7'}}
            onChange={ (e) => {handleChange(e)}}
            >
            <MenuItem value={'GET'}>GET</MenuItem>
            <MenuItem value={'POST'}>POST</MenuItem>
            <MenuItem value={'PUT'}>PUT</MenuItem>
        </Select>
        <TextField 
           size='small'
           style={{background:'#F6F6F6', width: '100%', marginRight:5, marginLeft:5}}
           value={formData.url}
           onChange={(e) => {onUrlChange(e)}}
        ></TextField>
        <Button
          variant='contained'
          style={{width:100, height:40}}
          onClick={() => onSendClick()}
        >

            send
        </Button>
    </Box>
  )
}

export default Form
