import React, { useContext } from 'react'
import { Box ,Tab, Tabs} from '@mui/material'
import { useState } from 'react'
import CreateTable from './CreateTable'
import CreateJsonText from './CreateJsonText'
import { DataContext } from '../context/DataProvider'
import CreateTestJson from './CreateTestJson'

const SelectTabs = () => {
    const {paramData,setParamData,headerData,setHeaderData}=useContext(DataContext)
    const [value,setValue]=useState(0);
    const handleChange =((event, newValue) => {
        setValue(newValue);
    })

  return (
    <Box style={{marginTop: 20}}>
        <Tabs value={value} onChange={handleChange}
            TabIndicatorProps={{sx :{ backgroundColor: "orange"}}}
            aria-label="basic tabs example">
            <Tab label="Params"/>
            <Tab label="Headers"/>
            <Tab label="Body" />
            <Tab label="Test" />
        </Tabs>
        <Box
            role="tabpanel"
            hidden={value !== 0}
            id={`simple-tabpanel-${0}`}
            aria-labelledby={`simple-tab-${0}`}
        > <CreateTable props={'Query Params'} data={paramData} setData={setParamData}/>
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 1}
            id={`simple-tabpanel-${1}`}
            aria-labelledby={`simple-tab-${1}`}
        > <CreateTable props={'Headers'} data={headerData} setData={setHeaderData}/>
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 2}
            id={`simple-tabpanel-${2}`}
            aria-labelledby={`simple-tab-${2}`}
        > <CreateJsonText />
        </Box>
        <Box
            role="tabpanel"
            hidden={value !== 3}
            id={`simple-tabpanel-${3}`}
            aria-labelledby={`simple-tab-${3}`}
        > <CreateTestJson />
        </Box>
    </Box>
  )
}

export default SelectTabs
