import React from 'react';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Auth from '../../utils/auth';


function LogoutBtn() {

  const handleLogout = () => {
    Auth.logout();
    console.log('logging out....');
  };

  return (
    <div>
      <IconButton
        variant="outlined"
        size="small"
        onClick={handleLogout}
        className='logoutbtn'
      >
        <div><LogoutIcon />Logout</div>
      </IconButton>
    </div>
  );
};

export default LogoutBtn;
