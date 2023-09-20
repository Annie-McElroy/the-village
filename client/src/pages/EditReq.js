import React from 'react';
import EditReq from '../components/EditReq.js';
import SubmitReqBttn from '../components/SubmitReqBtn';
import BackMeUp from '../components/BackBtn/index.js';
import AuthService from  '../utils/auth.js';
import Nav from '../components/Nav/index.js';

function EditRequest() {
  return (
    <div>
      <BackMeUp />
      <h1>Villager's Request:</h1>
      <EditReq />
      <SubmitReqBttn />
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )

};

export default EditRequest;