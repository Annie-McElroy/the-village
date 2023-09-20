import React from 'react';
import CreateReq from '../components/CreateRequest';
import BackMeUp from '../components/BackBtn';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';


function Create() {
  return (
    <div>
      <BackMeUp />
      <div className="pageFrame">
        <div sx={{ color: '#00425a' }}>
          <h1>Villager's Request:</h1>
        </div>
        <CreateReq />
      </div>
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )
};

export default Create;