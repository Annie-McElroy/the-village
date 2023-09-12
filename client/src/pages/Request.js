import React, { useEffect } from 'react';
import SingleRequest from '../components/DisplaySingleRequest';
import {useNavigate} from 'react-router-dom';

function Request() {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div>
       <button onClick={goBack}>Back</button>
      <h1>This is the Request Page</h1>
      <SingleRequest />
    </div>
  )

};

export default Request;

