import React from 'react'
import CreateVillage from '../components/CreateVillage'
import BackMeUp from '../components/BackBtn';

function CreateVillages(){
 
  return (
    <div>
      <BackMeUp />
      <h1>Create your village!</h1>
      <CreateVillage/>
    </div>
  )

};

export default CreateVillages;