import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function BsSnake(props) {
    let {open,close,mess} = props
  
const handleClose = () =>{
    close(false)
}
  const buttons = (
    <React.Fragment>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom-Center
        </Button> */}
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
        <Snackbar
        anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
        open={open}
        onClose={handleClose}
        message={mess}
        key={"vertical"+ "horizontal"}
      />
    </Box>
  );
}