import React from 'react';
import SingleRequest from '../components/DisplaySingleRequest';
import BackMeUp from '../components/BackBtn';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';
import './styles/request.css';

function Request() {
  return (
    <div className='villagehero'>
      <BackMeUp />
      <div className="pageFrame patternbkg">
      <h1>This is the Request Page</h1>
      <SingleRequest />

      </div>

      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )

};

export default Request;

