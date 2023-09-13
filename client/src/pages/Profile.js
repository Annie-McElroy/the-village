import React, { useState } from 'react';
import ProfileInfo from '../components/UserProfile';
import BackMeUp from '../components/BackBtn';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGER_CRAYON } from '../utils/queries';
import { useParams } from 'react-router-dom';
import LogoutBtn from '../components/LogoutBtn';
import Grid from '@mui/material/Grid'
import './styles/profile.css';
import { Padding } from '@mui/icons-material';
import DeleteHook from '../components/DeleteHook'

function Profile() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(QUERY_VILLAGER_CRAYON, {
    variables: {
      id: id
    }
  });

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      // Set isLoading to true to show a loading indicator.
      setIsDeleting(true);

      // Make an API request to delete the user's account.
      // You would replace this with your actual API endpoint.
      // Example using fetch:
      fetch('/api/delete-account', {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        },
      })
        .then(response => {
          if (response.ok) {
            console.log( 'Account deleted successfully')
          } else {
            console.error(error)
          }
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          // Reset isLoading when the request is completed.
          setIsDeleting(false);
        });
    }
  };

  const villager = data?.villager || {};
  console.log(villager);
  // setCardData(villager);
  // const [cardData, setCardData] = useState({});

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div className="profile">
      <Grid container spacing={5} justifyContent="space-between" sx={{ paddingLeft: '4%', paddingRight: '4%' }}>
        <Grid item>
          <BackMeUp />
        </Grid>
        <Grid item >
          <LogoutBtn className="logout-btn" />
        </Grid>
      </Grid>

      <div className="div-2">
        <div className="overlap">
          <ProfileInfo villager={villager} />
        
      <DeleteHook villager={id} />
        </div>
      </div>
    </div >
  );

};

export default Profile;