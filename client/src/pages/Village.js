import React from 'react';
import CreateReqButton from '../components/CreateReqButton.js';
import AllRequests from '../components/AllRequests.js'

const Village = () => {
  return (
    <div className="container">
      <h1>Village Name</h1>
      <CreateReqButton />
      <AllRequests />
    </div>

  );
};

export default Village;