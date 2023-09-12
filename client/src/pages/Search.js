import React, { useEffect } from 'react';
import CreateVillageBttn from '../components/CreateVillageBtn';
import BackMeUp from '../components/BackBtn';

function Search(){
  return (
    <div>
      <BackMeUp />
      <h1>Search </h1>
      <CreateVillageBttn/>
    </div>
  )

};

export default Search;

