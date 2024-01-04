import React, { useEffect } from 'react'
import {useContext,useState} from 'react'
import Header from './Header'
import Form from './Form'
import Response from './Response'
import SelectTabs from './SelectTabs'
import { Box, colors } from '@mui/material'
import ErrorScreen from './ErrorScreen'
import {DataContext} from '../context/DataProvider'
import { checkParams } from '../utils/common-utils'
import SnackBar from './SnackBar'
import {getData} from '../service/api'
import History from './History'

const initialArray = [];

const Home =  () => {
    const [error, setError] = useState(false);
    const [errorMsg,setErrorMsg]=useState('');
    const { formData , jsonText, paramData, headerData, testJson } = useContext(DataContext);
    const [errorResponse,setErrorResponse]=useState(false);
    const [apiResponse,setApiResponse]=useState({});
    const [statusCode,setStatusCode]=useState('');
    const [startTime,setStartTime]=useState('');
    const [endTime,setEndTime]=useState('');
    const [dataSize,setDataSize]=useState('');
    const [testRes,setTestRes]=useState([]);
    const [history,setHistory]=useState();
    const [data,setData]=useState({});
    //console.log(formData.type);
    const onSendClick = async () => {
      const start=new Date();
      setStartTime(start);
      if(!checkParams(formData,jsonText,paramData,headerData,setErrorMsg)) {
        setError(true);
        return false;
      }
      console.log(jsonText);
      let response = await getData(formData, jsonText, paramData, headerData );
      if(response==='error') {
        setErrorResponse(true);
        return;
      }
      setStatusCode(response.request.status);
      console.log(response);
      setErrorResponse(false);
      setApiResponse(response.data);
      const jsonString=JSON.stringify(response.data);
      const dataSizeInKB = (new Blob([jsonString]).size / 1024).toFixed(2);
      setDataSize(dataSizeInKB);
      const end=new Date();
      setEndTime(end);
      console.log(response.data);

      try 
      {
        console.log("valid");
        const a=(JSON.parse(testJson));

        console.log(a);
        let url='';
        const res=response.data;
        console.log(res.completed);
        let tcount=1;
        setTestRes([]);
        a.map((key) => {
          //console.log(key.id);
          if(key.url) {

            url=key.url;
            console.log(key.url);
          }
          else 
          {
            let x=JSON.stringify(key.function);
            let count=0,attribute='', comparator='', checkValue='';
            x.split("").forEach(element => {
              if(element==='"') {
                
              }
              else if(count===0 && element===')') {
                attribute=attribute+element;
                count=count+1;
              }
              else if(element==='(' || count===0) {
                attribute=attribute+element;
              }
              else if(element==="/" && (count===0 || count===1 )) {
                count=count+1;
              }
              else if(element==='>' || element==='<' || element==='=' || element==='&' || element==='*' || element==='%') {
                comparator=comparator+element;
                count=count-1;
              }
              else {
                checkValue=checkValue+element;
              }
            });
            console.log(comparator);
            console.log(checkValue.length);
            let y=eval(attribute);
            console.log(y);
            let z=`${y}`;
            z=z.length;
            console.log(z);
            if(comparator==='=') {
              console.log("call aaya");
              if(y===checkValue) {
                setTestRes(current => [...current,key.expect]);

              }
              else {
                setTestRes(current => [...current,'error']);
              }
            }
            else if(comparator==='>') {
              if(y>checkValue) {
                setTestRes(current => [...current,key.expect]);
              }
              else {
                setTestRes(current => [...current,'error']);
              }
            } 
            else if(comparator==='<') {
              if(y<checkValue) {
                setTestRes(current => [...current,key.expect]);
              }
              else {
                setTestRes(current => [...current,'error']);
              }
            }
            else if(comparator==='&') {
              if(z>checkValue) {
                setTestRes(current => [...current,key.expect]);
              }
              else {
                setTestRes(current => [...current,'error']);
              }
            }
            else if(comparator==='*') {
              if(z<checkValue) {
                setTestRes(current => [...current,key.expect]);
              }
              else {
                setTestRes(current => [...current,'error']);
              }
            }
            else if(comparator==='%') {
              if(z===checkValue) {
                setTestRes(current => [...current,key.expect]);
              }
              else {
                setTestRes(current => [...current,'error']);
              }
            }
          }
        }) 
      } 
      catch (error) 
      {
        console.log("not valid json");
      }
      const stringapiResponse=JSON.stringify(response.data);
      console.log(JSON.stringify(paramData));
      const backobj={
        body:`${jsonText}`,
        headers:`${JSON.stringify(headerData)}`,
        method:formData.type,
        params:`${JSON.stringify(paramData)}`,
        response:stringapiResponse,
        status:`${statusCode}`,
        url:formData.url
      }
      console.log(backobj);
      fetch("http://localhost:8081/data/add" , {
        method:"POST",
        headers: {
          'content-type':"application/json"
        },
        body: JSON.stringify(backobj),
      })
    }
  return (
    <>
        <Header/>
        
        <Box style={{width:"65%", margin:"20px 10px 10px 10px" , display:'flex'}} justifyContent='space-between'>
         <History />
         <Box marginLeft={'150px'}>
           <Form onSendClick={onSendClick}/>
           <SelectTabs/>
           {errorResponse? <ErrorScreen/> : <Response data={apiResponse} status={statusCode} startTime={startTime} endTime={endTime} dataSize={dataSize} testRes={testRes}/>}
           {error && <SnackBar error={error} setError={setError} setErrorMsg={setErrorMsg} errorMsg={errorMsg} />}
         </Box>
        </Box>
    </>
  )
}

export default Home
