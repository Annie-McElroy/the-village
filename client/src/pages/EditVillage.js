import React from 'react'
import EditVillage from '../components/EditVillage.js';
import BackMeUp from '../components/BackBtn/index.js';

function EditVillages(){
  return (
    <div>
      <BackMeUp />
      <h1>Create your village!</h1>
      <br></br>
      <EditVillage />
    </div>
  )

};

export default EditVillages;