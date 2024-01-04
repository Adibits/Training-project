import { Box } from '@mui/material'
import React from 'react'


const Header = () => {
    const logo="https://blog.testproject.io/wp-content/uploads/2021/06/API-testing-101.jpg"
  return (
    <Box display={'flex'} >
     <img src={logo} alt="logo" style={{width:'18%', padding:5, marginLeft:5}} />
     <p style={{marginLeft:'25%',fontSize:'40px'}}>API Testing Tool👋</p>
     
    </Box>
    
  )
}

export default Header
