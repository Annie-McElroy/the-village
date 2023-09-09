import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import About from '../../pages/About';
import Profile from '../../pages/Profile';
import Village from '../../pages/Village';

export default function Nav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Info" icon={<InfoIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} component={Link} to="/village/:id" />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} component={Link} to="/profile/:id"  />
      </BottomNavigation>
    </Box>
  );
}