import React from 'react'
import EditVillage from '../components/EditVillage.js';
import BackMeUp from '../components/BackBtn/index.js';
import AuthService from '../utils/auth.js';
import Nav from '../components/Nav/index.js';

function EditVillages() {
  return (
    <div>
      <BackMeUp />
      <h1>Create your village!</h1>
      <br></br>
      <EditVillage />
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )

};

export default EditVillages;