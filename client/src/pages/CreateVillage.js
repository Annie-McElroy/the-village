import React from 'react'
import CreateVillage from '../components/CreateVillage'
import {useNavigate} from 'react-router-dom';

function CreateVillages(){
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>Create your village!</h1>
      <CreateVillage/>
    </div>
  )

};

export default CreateVillages;