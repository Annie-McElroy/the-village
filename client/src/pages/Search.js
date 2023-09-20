import React, { useEffect } from 'react';
import CreateVillageBttn from '../components/CreateVillageBtn';
import BackMeUp from '../components/BackBtn';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';

function Search() {
  return (
    <div>
      <BackMeUp />
      <h1>Search </h1>
      <CreateVillageBttn />
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )

};

export default Search;

