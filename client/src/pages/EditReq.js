import React from 'react';
import EditReq from '../components/EditReq.js';
import SubmitReqBttn from '../components/SubmitReqBtn';
import BackMeUp from '../components/BackBtn/index.js';

function EditRequest(){
  return (
    <div>
       <BackMeUp />
      <h1>Villager's Request:</h1>
      <EditReq />
      <SubmitReqBttn />
    </div>
  )

};

export default EditRequest;