import * as React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger, Slide, AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HeaderSecond(props) {
  const [isSticky, setIsSticky] = React.useState(true);

  React.useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && isSticky) {
        setIsSticky(false);
      } else if (scrollTop === 0 && !isSticky) {
        setIsSticky(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position={isSticky ? 'sticky' : 'absolute'}>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to hide App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(19)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}
