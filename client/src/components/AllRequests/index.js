import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_REQUEST } from '../../utils/queries';
import DrawIcon from '@mui/icons-material/Draw';


export default function VillageRequests() {

  const { loading, data } = useQuery(QUERY_ALL_REQUEST);
  const requests = data?.requests;

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        requests ? (
          requests.map((request) => (
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
