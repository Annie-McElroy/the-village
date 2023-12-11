import React from "react";
import { DELETE_VILLAGER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Auth from '../../utils/auth'

function DeleteHook(props) {
  const [deleteVillagerMutation, { data, loading, error }] = useMutation(DELETE_VILLAGER);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  // console.log(props.villager)

  const handleDelete = async () => {
    if (window.confirm('Are you sure you would like to delete your account?')) {
      try {
        await deleteVillagerMutation({
          variables: {
            _id: props.villager,
          },
        });

        Auth.logout();
        // console.log('account deleted, logging out....');

      } catch (mutationError) {
        console.error('Mutation error:', mutationError);
      }
    } else {
      console.log('Cancel was selected');
    }
  };

  return (        
    <div className='deleteAccountbtn'>
      <Button
        variant="outlined"
        sx={{ marginTop: '8%' }}
        size="small"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
      >
        Delete Account
      </Button>
    </div>
  );
}

export default DeleteHook;
