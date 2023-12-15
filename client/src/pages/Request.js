import React from 'react';
import SingleRequest from '../components/DisplaySingleRequest';
import BackMeUp from '../components/BackBtn';
import AuthService from '../utils/auth';
import Nav from '../components/Nav';
import './styles/request.css';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_REQUEST } from '../utils/queries';
import { useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

function Request() {

  const { id } = useParams();

  const { data, loading, error } = useQuery(
    QUERY_SINGLE_REQUEST, {
      variables: {
        id: id
      }
    }
  );

  const request = data?.request || {};
  console.log(request);

  return (
    <div className='villagehero'>
      <BackMeUp />
      <div className="pageFrame patternbkg">
      <h1>This is the Request Page</h1>
      {loading ? (
        <Skeleton />
        ) : (
        <SingleRequest request={request}/>
      )}

      </div>

      {
        AuthService.loggedIn() && (<footer><Nav /></footer>)
      }
    </div>
  )

};

export default Request;

