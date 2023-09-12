import React from 'react';
import EditProfile from '../components/EditProfilePage';
import {useNavigate} from 'react-router-dom';

const EditProf = () => {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div className="container">
      <button onClick={goBack}>Back</button>
      <h1>Edit Your Profile</h1>
      <EditProfile />
    </div>

  );
};

export default EditProf;