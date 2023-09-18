import React from 'react';
import CreateReqButton from '../components/CreateReqButton';
import AllRequests from '../components/AllRequests/index.js'
import BackMeUp from '../components/BackBtn/index.js';
import './styles/village.css';




const Village = () => {
  const url = window.location.href;
  console.log(window.location.href);
  return (
    <div className='villagehero'>
      <div className="pageFrame patternbkg">
        <BackMeUp />
        <h1>Parentland</h1>
        <CreateReqButton url={`${url}/create-request`}
        />
        <AllRequests />

      </div>
    </div>


  );
};

export default Village;