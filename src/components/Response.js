import React from 'react'
import { Box, Typography, TextareaAutosize } from '@mui/material'


const Response = ({data}) => {
  console.log(data);
  return (
    <Box>
        <Typography mt={2} mb={2}>Response</Typography>
        <TextareaAutosize
           disabled="disabled"
           style={{width:"100%", padding: 10, 
           background: `url(http://i.imgur.com/2cOaJ.png)`, 
           backgroundAttachment: 'local', 
           backgroundRepeat: 'no-repeat', 
           paddingLeft: 35, paddingTop: 10,}}
           value={JSON.stringify(data,null,'\t')}
        ></TextareaAutosize>
    </Box>
  )
}

export default Response
