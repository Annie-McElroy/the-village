import React from 'react';
import Button from '@mui/material/Button';
import Auth from '../../utils/auth';


function LogoutBtn() {

  const handleLogout = () => {
    Auth.logout();
    console.log('logging out....');
  };

  return (
    <div>
      <Button
        color="tertiary"
        size="large"
        variant="contained"
        onClick={handleLogout}
        className="email-2">
        <div className="text-wrapper-5">Logout</div>
      </Button>
    </div>
  );
};

export default LogoutBtn;
