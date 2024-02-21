import * as React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Box } from '@mui/material';
import Container from '@mui/material/Container';

export default function HeaderSecond() {
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        function handleScroll() {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="sticky"
                style={{
                    backgroundColor: !isVisible ? "#FFFFFF" : '#f5f6f0',
                    boxShadow: isVisible ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Toolbar className='py-3'  sx={{justifyContent:"space-evenly"}}>
                    <Box>
                    <img src={require("../assest/mainlogo.png")} style={{ width: "122px" }} />
                    </Box>
                    <Box className="d-flex">
                    {["Writing", "Editing", "Design", "Publishing", "Marketing", "AudioBooks", "About", "Blog", "FAQS"].map((x, i) => {
                        return (
                            <Typography className='px-4' sx={{ color: "#020f14", fontSize: "15px", '&:hover': { color: '#ff5037', cursor: 'pointer'  } }} variant="h6" component="div">
                                {x}
                            </Typography>
                        )
                    })}
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Container>
             
            </Container>
        </React.Fragment>
    );
}
