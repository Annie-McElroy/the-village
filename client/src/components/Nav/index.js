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

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -60,
  left: 0,
  right: 0,
  margin: '0 auto',
  height: 120,
  width: 120,
});

export default function Nav() {
  const [value, setValue] = React.useState(0);
  const [imageSrc, setImageSrc] = React.useState('/icons/the-village-logo-white.svg');
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setImageSrc('/icons/the-village-logo.svg');
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setImageSrc('/icons/the-village-logo-white.svg');
    setIsHovered(false);
  };
  const handleClick = () => {
    setImageSrc('/icons/the-village-logo.svg');
    setIsHovered(!isHovered);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>

          <IconButton color="inherit" component={Link} to="/">
            <HolidayVillageIcon />
          </IconButton>

          <StyledFab
            color="tertiary"
            aria-label="village"
            component={Link}
            to="/village/:id"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <img src={imageSrc} height='100px' className="logo-transition" />
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