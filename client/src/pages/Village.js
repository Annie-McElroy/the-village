import React from 'react';
import DisplayRequest from './Request';
import ClaimRequestButton from '../components/ClaimRequestButton';
import CreateRequest from '../components/CreateRequest';

const Village = () => {
  return (
    <div className="container">
      <DisplayRequest />
      <ClaimRequestButton />
      <CreateRequest />
      
    </div>

  );
};

export default Village;