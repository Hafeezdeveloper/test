import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';


const HeaderFirst = () => {
  return (
    <div>
      <Box className="p-2" sx={{ backgroundColor: "#000"}}>
        <Grid container>
          <Grid md={9} item xs={12} sm={9}>
            <Box className="d-flex" style={{ justifyContent: "center" }}>
              <Typography sx={{color: '#ff5037', fontWeight: 'bolder' , fontSize:"16px"}} variant='h6'>CAll Us At:- </Typography>
              <Typography  className='px-2' sx={{color: '#fff', fontWeight: 'bolder', fontSize:"16px"}} variant='h6'>1-718-337-8849 </Typography>
            </Box>
          </Grid>
          <Grid id="centerUpperHeader"  md={3} item xs={12} sm={2}>
            <Box className="d-flex " sx={{alignItems:"center"}}>
              <PersonIcon  style={{ color: '#ff5037', fontSize:"22px" }} />
                <Box className="px-1">
              <Typography sx={{color: '#fff', fontSize:"16px", fontWeight: '500'}} variant='h6'> <Link sx={{ color: "#fff" }}>Sign Up</Link> </Typography>
                </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div >
  );
}

export default HeaderFirst;
