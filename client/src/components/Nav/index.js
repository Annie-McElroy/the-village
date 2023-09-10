import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import About from '../../pages/About';
import Profile from '../../pages/Profile';
import Village from '../../pages/Village';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function Nav() {
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>

          <IconButton color="inherit" component={Link} to="/">
          <HolidayVillageIcon />
          </IconButton>

          <StyledFab color="secondary" aria-label="village" component={Link} to="/village/:id">
                <Diversity1Icon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton color="inherit" component={Link} to="/profile/:id">
            <AccountCircleIcon />
          </IconButton>


        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}