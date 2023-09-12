import React, { useState } from 'react';
import ProfileInfo from '../components/UserProfile';
import BackMeUp from '../components/BackBtn';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGER_CRAYON } from '../utils/queries';
import { useParams } from 'react-router-dom';
import LogoutBtn from '../components/LogoutBtn';

function Profile() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(QUERY_VILLAGER_CRAYON, {
    variables: {
      id: id
    }
  });

  const villager = data?.villager || {};
  console.log(villager);
  // setCardData(villager);
  // const [cardData, setCardData] = useState({});

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <BackMeUp />
      <LogoutBtn />
      <h1>This is the Profile Page</h1>
      <ProfileInfo villager={villager} />

    </div>
  );

};

export default Profile;
