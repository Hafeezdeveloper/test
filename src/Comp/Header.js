import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = (props) => {
    let {screenTitle , buttonList} = props

    const backbtn = (e) =>{
            window.history.back()
    }
  return (
    <div>
      <Box className="d-flex shadow py-2 px-3 align-items-center  mb-3 justify-content-between">
        <Box className='d-flex '>
        <IconButton onClick={backbtn}><ArrowBackIcon /></IconButton>
        <Typography variant='h6' className='pt-1'>
            {screenTitle}
        </Typography>
        </Box>
        <Box>
        {buttonList && Array.isArray(buttonList) && buttonList.map((x,i) =>{
            return(
                <div key={i}>
                    {x.displayField ? x.displayField(x) : null }
                </div>
            )
        })}
        </Box>
      </Box>
    </div>
  )
}

export default Header
