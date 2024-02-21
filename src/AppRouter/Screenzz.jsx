import React from 'react'
import HeaderFirst from './HeaderFirst'
import HeaderSecond from './HeaderSecond'
import MainPart from './MainPart'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { Box } from '@mui/material';

const Screenzz = () => {
    return (
        <div  >
            <HeaderFirst />
            <div style={{backgroundColor:"#f5f6f0"}}>
            <HeaderSecond />
            <MainPart />
            </div>

        </div>
    )
}

export default Screenzz
