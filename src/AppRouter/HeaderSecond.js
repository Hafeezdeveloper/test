import * as React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
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
          backgroundColor: 'transparent',
          boxShadow: isVisible ? 'none' : '0px 4px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          <Typography sx={{color:"red"}} variant="h6" component="div">
            Scroll to hide App bar
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        {[...new Array(19)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </Container>
    </React.Fragment>
  );
}
