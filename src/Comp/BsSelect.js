import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BsSelect(props) {
    let {onChange,value,name,data} = props
  
  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
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