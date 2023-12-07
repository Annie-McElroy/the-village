import React from 'react';
import CreateReq from '../components/CreateRequest';
import BackMeUp from '../components/BackBtn';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';
import useGetVillager from '../utils/helper';


function Create() {
  let villagerId = AuthService.getProfile().data._id;

  const { data, loading, error } = useGetVillager(villagerId);

  if (loading) return 'Loading...';
  if (error) return `Query error! ${error.message}`;

  const villager = data?.villager || {}
  console.log(villager);

  const village = villager.village
  console.log(village);

  return (
    <div>
      <BackMeUp />
      <div className="pageFrame">
        <div sx={{ color: '#00425a' }}>
          <h1>Villager's Request:</h1>
        </div>
        <CreateReq villageId={village[0]._id} villagerId={villagerId}/>
      </div>
      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )
};

export default Create;