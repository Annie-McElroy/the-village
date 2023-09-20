import React from 'react';
import EditProfile from '../components/EditProfilePage';
import BackMeUp from '../components/BackBtn';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGER_CRAYON } from '../utils/queries';
import { useParams } from 'react-router-dom';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';

const EditProf = () => {
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
    <div className="container">
      <BackMeUp />
      <h1>Edit Your Profile</h1>
      <EditProfile villager={villager}/>
      {
            AuthService.loggedIn() && (<footer><Nav /></footer>)
          }
    </div>

  );
};

export default EditProf;