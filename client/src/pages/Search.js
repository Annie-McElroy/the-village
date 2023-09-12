import React, { useEffect } from 'react';
import CreateVillageBttn from '../components/CreateVillageBtn';
import {useNavigate} from 'react-router-dom';

function Search(){
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>Search </h1>
      <CreateVillageBttn/>
    </div>
  )

};

export default Search;

