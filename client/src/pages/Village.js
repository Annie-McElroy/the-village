import React from 'react';
import BackMeUp from '../components/BackBtn/index.js';
import './styles/village.css';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';
import FindVillage from '../components/FindVillage';
import VillageInfo from '../components/VillageInfo';
import useGetVillager from '../utils/helper.js';




const Village = () => {

  // auth.getProfile to get village ID from logged-in villager
  let villagerId = AuthService.getProfile().data._id;

  const { data, loading, error } = useGetVillager(villagerId);

  if (loading) return 'Loading...';
  if (error) return `Query error! ${error.message}`;

  const villager = data?.villager || {}
  // console.log(villager);

  const village = villager.village
  // console.log(village);

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