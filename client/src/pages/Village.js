import React from 'react';
import CreateReqButton from '../components/CreateReqButton';
import AllRequests from '../components/AllRequests/index.js'
import BackMeUp from '../components/BackBtn/index.js';
import './styles/village.css';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGE } from '../utils/queries.js';
import Skeleton from '@mui/material/Skeleton';




const Village = () => {

  // auth.getProfile to get village ID from logged-in villager
  const villageId = AuthService.getProfile().data.village[0];
  console.log(villageId);

  // Conditional statement for village ID existing or being null
  // If null, directs to "FindVillage" component
  // If existing, query single village with village ID to render all village information

  const { data, loading, error } = useQuery(
    QUERY_VILLAGE, {
    variables: {
      id: villageId
    }
  }
  );

  const village = data?.village || {};
  console.log(village);
  // const requests = village.requests
  // console.log(requests)


  // const url = window.location.href;
  // console.log(window.location.href);

  return (
    <div className='villagehero'>
      <BackMeUp />
      {loading ? (
        <Skeleton />
      ) : (
        <div className="pageFrame patternbkg">

          <h1>{village.name}</h1>
          <CreateReqButton url={`/village/create-request`}
          />
          <AllRequests requests={village.requests} />

        </div>
      )}
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>


  );
};

export default Village;