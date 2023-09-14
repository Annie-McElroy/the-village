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
import auth from '../../utils/auth';


const StyledFab = styled(Fab)({
  // styling for center Nav Village button
  position: 'absolute',
  zIndex: 1,
  top: -60,
  left: 0,
  right: 0,
  margin: '0 auto',
  height: 90,
  width: 90,
});

export default function Nav() {
  const [value, setValue] = React.useState(0);
  const [imageSrc, setImageSrc] = React.useState('/icons/the-village-logo-white.svg');
  const [isHovered, setIsHovered] = React.useState(false); // Transition effect state
  const villageID = auth.getProfile().data.village[0];
  const villagerID = auth.getProfile().data._id;

  // Village Logo hover and click effect will swap image for icon
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

          {/* "Home" button will direct logged in user to "what is the village page" */}
          <IconButton color="inherit" component={Link} to="/what-is-the-village">
            <HolidayVillageIcon />
          </IconButton>

          {/* "Village" button will direct logged in user to "their village" page */}
          <StyledFab
            color="tertiary"
            aria-label="village"
            component={Link}
            to={`/village/${villageID}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <img src={imageSrc} height='80px' className="logo-transition" />
          </StyledFab>

          {/* this line fixes the position of the profile button to the far right of the nav bar */}
          <Box sx={{ flexGrow: 1 }} />

          {/* "Profile" button will direct logged in user to their own profile page */}
          <IconButton color="inherit" component={Link} to={`/profile/${villagerID}`}>
            <AccountCircleIcon />
          </IconButton>


        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}