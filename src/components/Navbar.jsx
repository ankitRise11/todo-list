import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const Navbar = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <ElevationScroll>
      <AppBar sx={{backgroundColor:"black"}}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <Toolbar />
  </React.Fragment>
  )
}

export default Navbar