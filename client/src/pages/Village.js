import React, { useState, useEffect } from 'react';
import CreateReqButton from '../components/CreateReqButton';
import AllRequests from '../components/AllRequests/index.js'
import BackMeUp from '../components/BackBtn/index.js';
import './styles/village.css';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGE } from '../utils/queries.js';
import Skeleton from '@mui/material/Skeleton';
import JoinVillage from '../components/JoinVillage';
import VillageInfo from '../components/VillageInfo';




const Village = () => {

  // auth.getProfile to get village ID from logged-in villager
  let villageId = AuthService.getProfile().data.village[0];
  console.log(villageId);

  // const [villageData, setVillageData] = useState({});

  // const { data, loading, error } = useQuery(
  //   QUERY_VILLAGE, {
  //   variables: {
  //     id: villageId
  //   }},
  //   {onCompleted: setVillageData}
  // );

  // let village = data?.village || {};
  // console.log(village);

  // useEffect(() => {
  //   setVillageData(villageData);
  // }, [villageData]);
  // const requests = village.requests
  // console.log(requests)

  // useEffect(() => {
  //   console.log('Request added:', village.requests);
  // }, [village.requests])


  // const url = window.location.href;
  // console.log(window.location.href);

  return (
    <div className='villagehero'>
      <BackMeUp />
      {!villageId
        ? (
          <JoinVillage />
        ) : (
          <VillageInfo villageId={villageId}/>
        )}


      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>


  );
};

export default Village;