import { Button , CircularProgress } from '@mui/material'
import React from 'react'

const BsButton = (props) => {
    let {label,onClick,loading} = props
  return (
    <div>
      <Button disabled={loading} variant='contained' onClick={onClick}>{loading ? <CircularProgress/> : {label} }</Button>
    </div>
  )
}

export default BsButton
