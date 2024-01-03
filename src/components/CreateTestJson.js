import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../context/DataProvider'

import { TextareaAutosize, Typography } from '@mui/material'

const CreateTestJson = () => {
  const {testJson,setTestJson}=useContext(DataContext);
//   const [b,setB] =useState('');
  const onValueChange =(e) => {
    // setB((e.target.value));
    // setTestJson(JSON.parse(JSON.stringify(testJson)));
    setTestJson(e.target.value);
  }
//   useEffect(()=>{
// console.log(b);
//   },[b])
  return (
    <>
      <Typography mt={2} mb={2}>JSON</Typography>
      <TextareaAutosize
        onChange={(e) => onValueChange(e)}
        style={{width:"100%", padding: 10, 
        background: `url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment: 'local', backgroundRepeat: 'no-repeat',
        paddingLeft: 35, paddingTop: 10 }}
      > 
      </TextareaAutosize>
    </>
  )
}

export default CreateTestJson