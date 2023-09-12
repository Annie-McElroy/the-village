import React from 'react';
import CreateReqButton from '../components/CreateReqButton.js';
import AllRequests from '../components/AllRequests/index.js'
import {useNavigate} from 'react-router-dom';

const Village = () => {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div className="container">
      <button onClick={goBack}>Back</button>
      <h1>Village Name</h1>
      <CreateReqButton />
      <AllRequests />
    </div>

  );
};

export default Village;