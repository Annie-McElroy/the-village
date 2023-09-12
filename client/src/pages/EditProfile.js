import React from 'react';
import EditProfile from '../components/EditProfilePage';
import BackMeUp from '../components/BackBtn';

const EditProf = () => {
  return (
    <div className="container">
      <BackMeUp />
      <h1>Edit Your Profile</h1>
      <EditProfile />
    </div>

  );
};

export default EditProf;