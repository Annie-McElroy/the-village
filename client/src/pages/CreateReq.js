import React from 'react';
import CreateReq from '../components/CreateRequest';
import BackMeUp from '../components/BackBtn';

function Create(){
  return (
    <div>
      <BackMeUp />
      <h1>Villager's Request:</h1>
      <CreateReq />
    </div>
  )

};

export default Create;