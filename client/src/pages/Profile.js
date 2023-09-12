import React from 'react';
import ProfileInfo from '../components/UserProfile';
import BackMeUp from '../components/BackBtn';

function Profile(){
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
      <BackMeUp />
      <h1>This is the Profile Page</h1>
      {cardData.map((data, index) => (
        <ProfileInfo key={index} {...data} />
      ))}
    </div>
  )

};

export default Profile;

