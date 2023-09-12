import React from 'react';
import ProfileInfo from '../components/UserProfile';
import {useNavigate} from 'react-router-dom';

function Profile(){
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  const cardData = [
    {
      avatarSrc: '/images/gravatar.png',
      userName: 'nyx',
      firstName: 'Dahlia',
      lastName: 'Guido',
      email: 'Dahlia@gmail.com',
      crayons: 4
    }
  ];

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>This is the Profile Page</h1>
      {cardData.map((data, index) => (
        <ProfileInfo key={index} {...data} />
      ))}
    </div>
  )

};

export default Profile;

