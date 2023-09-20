import React from 'react'
import CreateVillage from '../components/CreateVillage'
import BackMeUp from '../components/BackBtn';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';

function CreateVillages() {

  return (
    <div>
      <BackMeUp />
      <h1>Create your village!</h1>
      <CreateVillage />
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )

};

export default CreateVillages;