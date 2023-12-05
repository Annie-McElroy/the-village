import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_REQUEST } from '../../utils/queries';
import DrawIcon from '@mui/icons-material/Draw';
import { useParams } from 'react-router-dom';

export default function ReqsByVillager() {

  // pull in all villagers 
  const { loading, data } = useQuery(QUERY_ALL_REQUEST);

  // check for data before assigning requests variable
  const requests = data?.requests;

  // pull user id from url
  const { id } = useParams();

  // set to empty array, will push in user reqs conditionally
  const userRequests = []; 

  //check to see if requests has been assigned before looping
  if (requests) {
    // check through all requests for those where the author id matches the param id from the url
    for (let i = 0; i < requests.length; i++) {
      const requestObject = requests[i];
      let authId = requestObject.authorId;
      if (authId === id) {
        userRequests.push(requestObject)
      }
    }
  }

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        userRequests ? (
          userRequests.map((request) => (
            <Card className="request-card" key={request.id}>
              <div className='req-info'>
                <Typography className='requested-by'>Requested by: {request.authorId.username}</Typography>
                <Typography className='request-card-title'>{request.title}</Typography>
                <Typography className='request-card-description'>{request.body}</Typography>
              </div>
              <Typography className='request-card-crayons'> 
              <span>
              <DrawIcon style={{ color: '#FC7300', fontSize: '2.3rem' }} />
            </span>{request.crayons} <br />
            <span>Crayons</span></Typography>

            </Card>
          ))
        ) : (
          <p>No requests found</p>
        )

      )}

    </div>
  );
}
