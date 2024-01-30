import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ClaimRequestButton from '../ClaimRequestButton';
import CommentForm from '../CommentForm';
import FunkButton from '../FunkButton';
import DisplayComment from '../DisplayComment';
import DrawIcon from '@mui/icons-material/Draw';
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { QUERY_SINGLE_REQUEST } from '../../utils/queries';

export default function SingleRequest({ request }) {

  const [commentList, setCommentList] = useState(request.comments);

  useEffect(() => {
    setCommentList(request.comments); // Update comments when props change
}, [request.comments]);

  // const addComment = (comment) => {
  //   console.log('AddComment called')
  //   setCommentList((prevComments) => [...prevComments, comment])
  // };

  const deleteComment = (id) => {
    setCommentList(prevComments => prevComments.filter(comment => comment._id !== id));
  }

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
      <CommentForm  requestId={request._id} setCommentList={setCommentList} />
      {/* <CommentFormButton onClick={handleSubmit}/> */}
      <DisplayComment comments={commentList} deleteComment={deleteComment} />
    </div>
  );
}