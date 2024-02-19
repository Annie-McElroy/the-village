import * as React from 'react';
import { CardActionArea, Card, Typography } from '@mui/material';
import DrawIcon from '@mui/icons-material/Draw';
import { Link } from 'react-router-dom';



export default function VillageRequests(props) {

  // Grabbing the requests from the villageReqList prop
  

  return (
    <div>
      {(
        props.requests.map((request) => (
          <Card className="request-card" key={request._id}>
            <CardActionArea className="req-action" component={Link} to={`/request/${request._id}`}>
              <div className='req-info'>
                <Typography className='requested-by'>Requested by: {request.authorId.username}</Typography>
                <Typography className='request-card-title'>{request.title}</Typography>
                <Typography className='request-card-description'>{request.body}</Typography>
              </div>
              <Typography className='request-card-crayons'>
                <span>
                  <DrawIcon style={{ color: '#FC7300', fontSize: '2.3rem' }} />
                </span>{request.crayons} <br />
                <span>Crayons</span>
              </Typography>
            </CardActionArea>
          </Card>
        ))
      )}

    </div>
  );
}
