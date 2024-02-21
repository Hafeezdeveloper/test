import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function BsTabs(props) {
let {data,onChange,value,clbBtn} = props

// -----here we can send by Onclick data------------

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={onChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {data && Array.isArray(data) && data.map( (x,i) =>{
            return(
                <Tab label={x.name} onClick={() => clbBtn(x.name) }/>
            )
        })}
      </Tabs>
    </Box>
  );
}