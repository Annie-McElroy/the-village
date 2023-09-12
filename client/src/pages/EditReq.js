import React from 'react';
import EditReq from '../components/EditReq.js';
import SubmitReqBttn from '../components/SubmitReqBtn';
import {useNavigate} from 'react-router-dom';

function EditRequest(){
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div>
       <button onClick={goBack}>Back</button>
      <h1>Villager's Request:</h1>
      <EditReq />
      <SubmitReqBttn />
    </div>
  )

};

export default EditRequest;