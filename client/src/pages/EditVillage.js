import React from 'react'
import EditVillage from '../components/EditVillage.js';
import {useNavigate} from 'react-router-dom';

function EditVillages(){
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>Create your village!</h1>
      <br></br>
      <EditVillage />
    </div>
  )

};

export default EditVillages;