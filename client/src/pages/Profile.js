import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ProfileInfo from '../components/UserProfile';
import Auth from '../utils/auth';

function Profile() {

  const [cardData, setCardData] = useState([
    {
      avatarSrc: '/images/gravatar.png',
      userName: 'nyx',
      firstName: 'Dahlia',
      lastName: 'Guido',
      email: 'Dahlia@gmail.com',
      crayons: 4
    }
  ]);

  const history = useHistory();

  const handleLogout = () => {
    Auth.logout();
    history.push('/');

    console.log('logging out....');
  };

  return (
    <div>
      <h1>This is the Profile Page</h1>
      <Button
        color="tertiary"
        size="large"
        variant="contained"
        onClick={handleLogout}
        className="email-2">
        <div className="text-wrapper-5">Logout</div>
      </Button>



      {cardData.map((data, index) => (
        <ProfileInfo key={index} {...data} />
      ))}
    </div>
  )

};

export default Profile;

