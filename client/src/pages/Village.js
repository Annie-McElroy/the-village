import React from 'react';
import CreateReqButton from '../components/CreateReqButton';
import AllRequests from '../components/AllRequests/index.js'
import BackMeUp from '../components/BackBtn/index.js';
import './styles/village.css';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';


// Query the village ID from the villager
// auth.getProfile to get village ID from loggedin Villager
// Conditional statement for village ID existing or being null
// If null, directs to "FindVillage" component
// If existing, query single village with village ID to render all village information

const Village = () => {
  const url = window.location.href;
  console.log(window.location.href);
  return (
    <div className='villagehero'>
       <BackMeUp />
      <div className="pageFrame patternbkg">
       
        <h1>Parentland</h1>
        <CreateReqButton url={`${url}/create-request`}
        />
        <AllRequests />

      </div>
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>


  );
};

export default Village;