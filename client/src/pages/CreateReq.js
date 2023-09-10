import React from 'react';
import CreateReq from '../components/CreateRequest';
import SubmitReqBttn from '../components/SubmitReqBtn';

function Create(){

  return (
    <div>
      <h1>Villager's Request:</h1>
      <CreateReq />
      <SubmitReqBttn />
    </div>
  )

};

export default Create;