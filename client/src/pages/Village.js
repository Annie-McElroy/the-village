import React, { useState, useEffect } from 'react';
import CreateReqButton from '../components/CreateReqButton';
import AllRequests from '../components/AllRequests/index.js'
import BackMeUp from '../components/BackBtn/index.js';
import './styles/village.css';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGER } from '../utils/queries.js';
import Skeleton from '@mui/material/Skeleton';
import FindVillage from '../components/FindVillage';
import VillageInfo from '../components/VillageInfo';
import VillageRequests from '../components/AllRequests/index.js';
import useGetVillager from '../utils/helper.js';




const Village = () => {

  // auth.getProfile to get village ID from logged-in villager
  let villagerId = AuthService.getProfile().data._id;

  const { data, loading, error } = useGetVillager(villagerId);

  if (loading) return 'Loading...';
  if (error) return `Query error! ${error.message}`;

  const villager = data?.villager || {}
  console.log(villager);

  const village = villager.village
  console.log(village);

  // console.log(typeof village)

  // if (village.length !== 0) {
  //   const villageId = village[0]._id
  //   console.log(villageId)
  // } else {
  //   console.log('This is an empty array')
  // }

  // const villageId = village[0]._id
  // console.log(villageId)

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
      {/* <p>This works</p> */}
      {village.length === 0
        ? (
          <FindVillage />
        ) : (
          <VillageInfo villageId={village}/>
        )}


      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>


  );
};

export default Village;