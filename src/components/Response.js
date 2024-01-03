import React ,{useContext, useState} from 'react'
import { Box, Typography, TextareaAutosize} from '@mui/material'
import { Tab, Tabs} from '@mui/material'
import { DataContext } from '../context/DataProvider';


const Response = ({data,status,startTime,endTime,dataSize,testRes}) => {
  const testResValue=testRes.join('\n');
  const [value,setValue]=useState(0);
  const statusCode = () =>{
    if(status===200) return "OK";
    else if(status===404) return "Not Found";
    else if(status===400) return"Bad Request";
    else if(status===500) return"Internal Server";
    else if(status===504) return"Gateway Timeout";
    else if(status===505) return"HTTP Version Not Supported";
    else if(status===401) return"Unauthorized";
    else if(status===507) return"Insufficient Storage";
    else if(status===408) return"Request Timeout";
    else if(status===502) return"Gateway";
  }
  const time = () => {
    let t=endTime-startTime;
    return t+'ms';
  }
  const handleChange =((event, newValue) => {
    setValue(newValue);
  })
  const returning = (test) => {
    test.map((key) => {
      if(key==='error') {
        
        return ('Fail' + {key});
      } 
      else {
        <button>Pass</button>
        return {key};
      }
    })
  }
  return (
    /*<Box>
          <Toolbar variant='primary' style={{margin:3, background:"black"}}>
            <Typography variant='h6' style={{color:"white"}}>Response</Typography>
            <Typography ml={50} color={'green'}>{status}</Typography>
            <Typography color={'green'}>{statusCode()}</Typography>
            <Typography color={'green'} ml={1}>{time()}</Typography>
            <Typography color={'green'} ml={1}>{dataSize}kb</Typography>
          </Toolbar>
        
        <TextareaAutosize
           disabled="disabled"
           style={{width:"100%", padding: 10, 
           background: `url(http://i.imgur.com/2cOaJ.png)`, 
           backgroundAttachment: 'local', 
           backgroundRepeat: 'no-repeat', 
           paddingLeft: 35, paddingTop: 10,}}
           value={JSON.stringify(data,null,2)}
        ></TextareaAutosize>
    </Box>*/
    <Box style={{marginTop: 20}}>
      <Tabs value={value} onChange={handleChange}
          TabIndicatorProps={{sx :{ backgroundColor: "orange"}}}
          aria-label="basic tabs example">
          <Tab label="Body"/>
          <Tab label="Test"/>
          <Typography ml={40} color={'green'}>{status}</Typography>
          <Typography color={'green'}>{statusCode()}</Typography>
          <Typography color={'green'} ml={1}>{time()}</Typography>
          <Typography color={'green'} ml={1}>{dataSize}kb</Typography>
      </Tabs>
            
      <Box
          role="tabpanel"
          hidden={value !== 0}
          id={`simple-tabpanel-${0}`}
          aria-labelledby={`simple-tab-${0}`}
        > 
        <TextareaAutosize
           disabled="disabled"
           style={{width:"100%", padding: 10, 
           background: `url(http://i.imgur.com/2cOaJ.png)`, 
           backgroundAttachment: 'local', 
           backgroundRepeat: 'no-repeat', 
           paddingLeft: 35, paddingTop: 10,}}
           value={JSON.stringify(data,null,2)}
        ></TextareaAutosize>
      </Box>
      <Box
        role="tabpanel"
        hidden={value!==1} 
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <TextareaAutosize
           disabled="disabled"
           style={{width:"100%", padding: 10, 
           background: `url(http://i.imgur.com/2cOaJ.png)`, 
           backgroundAttachment: 'local', 
           backgroundRepeat: 'no-repeat', 
           paddingLeft: 35, paddingTop: 10,
           lineHeight:'1.5'}}
           value={returning()}
        > 
        </TextareaAutosize>
      </Box> 
    </Box>
  )
}

export default Response
