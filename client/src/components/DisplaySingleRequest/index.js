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
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { QUERY_SINGLE_REQUEST } from '../../utils/queries';

export default function SingleRequest({ request }) {

  const [userInput, setUserInput] = useState('')

  const [addCommentMutation, { data, loading, error }] = useMutation(ADD_COMMENT);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleMutation = async (userInput) => {
    try {
      console.log('Mutation runs')
      await addCommentMutation({
        variables: {
          body: userInput,
          requestId: request._id
        },
        refetchQueries: [
          {query: QUERY_SINGLE_REQUEST,
            variables: {
              id: request._id
            }
          }
        ]
      });
    } 
    catch (error) {
      console.error('Mutation error: ', error.message)
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      handleMutation(userInput);
    } 
    catch (error) {
      console.error('Mutation error: ', error.message)
    }
  };

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
      <CommentForm onClick={handleSubmit} userInput={userInput} setUserInput={setUserInput}/>
      {/* <CommentFormButton onClick={handleSubmit}/> */}
      <DisplayComment comments={request.comments}/>
    </div>
  );
}