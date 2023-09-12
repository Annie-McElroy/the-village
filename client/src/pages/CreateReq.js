import React from 'react';
import CreateReq from '../components/CreateRequest';
import {useNavigate} from 'react-router-dom';

function Create(){
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>Villager's Request:</h1>
      <CreateReq />
    </div>
  )

};

export default Create;