import React from 'react'
import {useContext,useState} from 'react'
import Header from './Header'
import Form from './Form'
import Response from './Response'
import SelectTabs from './SelectTabs'
import { Box } from '@mui/material'
import ErrorScreen from './ErrorScreen'
import {DataContext} from '../context/DataProvider'
import { checkParams } from '../utils/common-utils'
import SnackBar from './SnackBar'
import {getData} from '../service/api'

const Home =  () => {
    const [error, setError] = useState(false);
    const [errorMsg,setErrorMsg]=useState('');
    const {formData,jsonText, paramData, headerData } = useContext(DataContext);
    const [errorResponse,setErrorResponse]=useState(false);
    const [apiResponse,setApiResponse]=useState({});
    const onSendClick = async () => {
      if(!checkParams(formData,jsonText,paramData,headerData,setErrorMsg)) {
        setError(true);
        return false;
      }
      let response = await getData(formData, jsonText, paramData, headerData );
      if(response==='error') {
        setErrorResponse(true);
        return;
      }
      setErrorResponse(false);
      setApiResponse(response.data);
    }
  return (
    <>
        <Header/>
        <Box style={{width:"60%", margin:"20px auto 0 auto"}}>
           <Form onSendClick={onSendClick}/>
           <SelectTabs/>
           {errorResponse? <ErrorScreen/> : <Response data={apiResponse} />}
           {error && <SnackBar error={error} setError={setError} setErrorMsg={setErrorMsg} errorMsg={errorMsg}/>}
        </Box>
    </>
  )
}

export default Home
