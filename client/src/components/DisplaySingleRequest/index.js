import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ClaimRequestButton from '../ClaimRequestButton';
import CommentForm from '../CommentForm';
import FunkButton from '../FunkButton';
import DisplayComment from '../DisplayComment';
import DrawIcon from '@mui/icons-material/Draw';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { DELETE_REQUEST } from '../../utils/mutations';
import AuthService from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function SingleRequest({ request }) {

  const navigate = useNavigate();
  
  const [commentList, setCommentList] = useState(request.comments);
  
  useEffect(() => {
    setCommentList(request.comments); // Update comments when props change
  }, [request.comments]);
  
  const deleteComment = (id) => {
    setCommentList(prevComments => prevComments.filter(comment => comment._id !== id));
  }

  // State for request (global state needed)
  // Hidden Button -> Are you sure? No or Yes OR alert before deletion is put through

  const [deleteReqMutation, { data, loading, error }] = useMutation(DELETE_REQUEST);

  if (loading) return "Deleting...";
  if (error) return `Delete error! ${error.message}`;

  const handleDelete = async () => {
    try {
      await deleteReqMutation({
        variables: {
          id: request._id
        }
      });

      navigate(-1);

    } catch (error) {
      console.error('Mutation error: ', error.message);
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
        {AuthService.getProfile().data._id == request.authorId._id && <FunkButton value={<DeleteIcon />} onClick={() => handleDelete(request._id)} />}
      </Card>
      <ClaimRequestButton />
      <CommentForm  requestId={request._id} setCommentList={setCommentList} />
      {/* <CommentFormButton onClick={handleSubmit}/> */}
      <DisplayComment comments={commentList} deleteComment={deleteComment} />
    </div>
  );
}