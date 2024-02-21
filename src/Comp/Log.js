import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import BsInp from './BsInp'
import BsInpFull from './BsInpFull'
// import BsNavbar from './BsNavbar'

const Log = () => {
  return (
    <div>
        {/* <BsNavbar /> */}
      <Box sx={{width:{md:'360px',sm:'325px',xs:'100%'}}} className=' shadow m-auto mt-2'>
          <Box >
            <Typography className='text-center py-2' variant='h4'>Login</Typography>
            <Box className='px-3'>

            <Box className=' my-3  '>
            <div className='mx-1'>
              <BsInpFull label='Name ' className='w-100'/>
            </div>
            </Box>

            <Box className=' my-3  '>
            <div className='mx-1'>
              <BsInpFull label='Paswword ' className='w-100'/>
            </div>
            </Box>
        

            <Box sx={{ display: 'flex', justifyContent: 'center' }} className='  py-3'>
              <Button variant='contained' name='submit' >awdw</Button>
            </Box>


            </Box>

          </Box>
      </Box>
    </div>
  )
}

export default Log