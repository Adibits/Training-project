import React, {useContext} from 'react'
import { DataContext } from '../context/DataProvider'

import { TextareaAutosize, Typography } from '@mui/material'

const CreateJsonText = () => {
  const {jsonText,setJsonText}=useContext(DataContext);
  const onValueChange =(e) => {
    setJsonText(e.target.value);
    //console.log(jsonText);
  }
  return (
    <>
      <Typography mt={2} mb={2}>JSON</Typography>
      <TextareaAutosize
        onChange={(e) => onValueChange(e)}
        //value={jsonText}
        style={{width:"100%", padding: 10, 
        background: `url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment: 'local', backgroundRepeat: 'no-repeat',
        paddingLeft: 35, paddingTop: 10 }}
      > 
      </TextareaAutosize>
    </>
  )
}

export default CreateJsonText
