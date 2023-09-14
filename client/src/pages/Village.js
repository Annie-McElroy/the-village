import React from 'react';
import CreateReqButton from '../components/CreateReqButton.js';
import AllRequests from '../components/AllRequests/index.js'
import BackMeUp from '../components/BackBtn/index.js';



const Village = () => {
  const url = window.location.href;
  console.log(window.location.href);
  return (
    <div className="container">
      <BackMeUp />
      <h1>Village Name</h1>
      <CreateReqButton url={`${url}/create-request`}
      />
      <AllRequests />
    </div>

  );
};

export default Village;