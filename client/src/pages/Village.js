import React from 'react';
import CreateReqButton from '../components/CreateReqButton.js';
import AllRequests from '../components/AllRequests.js'

const Village = () => {
  return (
    <div className="container">
      <CreateReqButton />
      <AllRequests />
    </div>

  );
};

export default Village;