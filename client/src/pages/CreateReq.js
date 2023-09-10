import React from 'react';
import CreateRequest from '../components/CreateRequest';
import SubmitReqBttn from '../components/SubmitReqBtn';

function Create(){

  return (
    <div>
      <h1>Villager's Request:</h1>
      <CreateRequest />
      <SubmitReqBttn />
    </div>
  )

};

export default Create;