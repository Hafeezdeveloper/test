import { TextField } from '@mui/material'
import React from 'react'

const BsInp = (props) => {
    let {onChange , label}= props
  return (
    <div>
      <TextField  onChange={onChange} label={label} />
    </div>
  )
}

export default BsInp
