import React from 'react';
import EditReq from '../components/EditReq.js';
import SubmitReqBttn from '../components/SubmitReqBtn';

function EditRequest(){

  return (
    <div>
      <h1>Villager's Request:</h1>
      <EditReq />
      <SubmitReqBttn />
    </div>
  )

};

export default EditRequest;