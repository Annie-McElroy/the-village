import React from 'react';
import SingleRequest from '../components/DisplaySingleRequest';
import BackMeUp from '../components/BackBtn';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';

function Request() {
  return (
    <div>
      <BackMeUp />
      <h1>This is the Request Page</h1>
      <SingleRequest />
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )

};

export default Request;

