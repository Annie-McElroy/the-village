import React from 'react';
import CreateReq from '../components/CreateRequest';
import BackMeUp from '../components/BackBtn';


function Create(){
  return (
    <div>
      <BackMeUp />
      <div className="pageFrame">
      <div sx={{ color: '#00425a'}}>
      <h1>Villager's Request:</h1>
      </div>
      <CreateReq />
      </div>
    </div>
  )
};

export default Create;