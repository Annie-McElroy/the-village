import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ClaimRequestButton from '../ClaimRequestButton';
import FunkButton from '../FunkButton';
import LinkButton from '../LinkButton';
import DrawIcon from '@mui/icons-material/Draw';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useMutation } from '@apollo/client';
import { DELETE_REQUEST } from '../../utils/mutations';
import AuthService from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function SingleRequest({ request }) {

  const navigate = useNavigate();

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
        {AuthService.getProfile().data._id == request.authorId._id
          &&
          <div>
            <FunkButton value={<DeleteIcon />} onClick={() => handleDelete(request._id)} />
            <LinkButton value={<EditIcon />} url={`/request/${request._id}/edit-request`} />
          </div>
        }
      </Card>
      <ClaimRequestButton />
    </div>
  );
}