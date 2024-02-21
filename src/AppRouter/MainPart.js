import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Inpu from '../Comp/Inpu'
import BsSelect from '../Comp/BsSelect'

const MainPart = () => {
    return (
        <div className='container'>
            <Typography variant="h6">Professional Book Writing Services USA</Typography>
            <Typography variant="h4" className='space-grotesk'>Your path toward publishing success begins here!</Typography>
            <Box className="mt-3">
                <Typography variant="body1">At Wood Bridge Publishers, we understand that your journey as an author doesn't end with writing a compelling book or manuscript.</Typography>
                <Typography variant="body1" className='space-grotesk'>That's why, as the best book publishers, we offer comprehensive publishing solutions to help you bring your literary masterpiece to the world.</Typography>
                <Grid container>
                    <Grid className='pe-2' xs={6} item md={3}>
                        <Inpu label={"Emter Your Name"} />
                    </Grid>
                    <Grid xs={6} item md={3}>
                        <Inpu label={"Emter Your Email"} />
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item md={6} xs={12}>
                        <Inpu label={"Contact Number"} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid className='pe-2' item md={3} xs={12}>
                        <BsSelect data={[
                            {
                                fullName: "Select Your Serice",
                            },
                            {
                                fullName: "Ghost Writing",
                            },
                            {
                                fullName: "Publishing",
                            },
                            {
                                fullName: "Editing",
                            },
                            {
                                fullName: "Marketing",
                            },
                            {
                                fullName: "Printing",
                            },

                        ]} />

                    </Grid>
                    <Grid item md={3} xs={12}>
                        <BsSelect data={[
                            {
                                fullName: "Select Your Serice",
                            },
                            {
                                fullName: "Ghost Writing",
                            },
                            {
                                fullName: "Publishing",
                            },
                            {
                                fullName: "Editing",
                            },
                            {
                                fullName: "Marketing",
                            },
                            {
                                fullName: "Printing",
                            },

                        ]} />

                    </Grid>
                </Grid>

                <Grid className='mt-2 ' container>
                    <Grid className='pe-2' item md={3} xs={12}>
                        <Inpu file={true} label={"Contact Number"} />
                    </Grid>
                </Grid>
                <Grid className='mt-2 ' container>
                    <Grid className='pe-2' item md={6} xs={12}>
                        <Typography className='d-flex' sx={{ fontSize: 14 }} variant="body1">
                            <Box >
                                <input type="checkbox" name="" id="" />  Please check the box to communicate via sms or email
                                (TERM & CONDITIONS) - Carrier charges may apply for sms. reply stop or
                                unsubscribe to stop to unsbscribe anytime.
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className='mt-2 ' container>
                    <Box >
                        <Button sx={{ backgroundColor: "#ff5037", color: "white" }} className='cta-btn'>
                            Let's Start
                        </Button>
                    </Box>
                </Grid>

            </Box>
        </div>
    )
}

export default MainPart
