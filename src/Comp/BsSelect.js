import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BsSelect(props) {
    let {onChange,value,name,data} = props
  
  return (
    <div>
      <FormControl sx={{width:"100%"}}>
        <InputLabel id="demo-simple-select-filled-label">{name}</InputLabel>
        <Select
         labelId="demo-simple-select-label"
         id="demo-simple-select"
          value={value}
          onChange={onChange}
        >
        {data && Array.isArray(data) && data.map( (x,i) =>{
            return(
       <MenuItem value={x.fullName}>{x.fullName}</MenuItem>
            )
        })}
        </Select>
      </FormControl>
    </div>
  );
}   