import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ClaimRequestButton from '../ClaimRequestButton';
import CommentForm from '../CommentForm';
import CommentFormButton from '../CommentFormButton';
import DisplayComment from '../DisplayComment';
import DrawIcon from '@mui/icons-material/Draw';

export default function SingleRequest({ request }) {
  return (
    <div>
      <Card className="request-card" key={request._id}>
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
      </Card>
      <ClaimRequestButton />
      <CommentForm />
      <CommentFormButton />
      <DisplayComment comments={request.comments}/>
    </div>
  );
}