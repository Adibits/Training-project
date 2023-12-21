import React from 'react'
import { Snackbar } from '@mui/material'

const SnackBar = ({error,setError, errorMsg}) => {
    const handleClose =() => {
        setError(false);
    }
  return (
    <div>
    <Snackbar 
        open={error}
        autoHideDuration={2000}
        onClose={handleClose}
        message={errorMsg}
    />
    </div>
  )
}

export default SnackBar
