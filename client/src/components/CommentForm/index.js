import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FunkButton from '../FunkButton';
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { QUERY_SINGLE_REQUEST } from '../../utils/queries';

export default function CommentForm({ requestId }) {

  const [userInput, setUserInput] = useState('')

  const [addCommentMutation, { data, loading, error }] = useMutation(ADD_COMMENT);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleMutation = async (userInput) => {
    try {
      // console.log('Mutation runs')
      await addCommentMutation({
        variables: {
          body: userInput,
          requestId: requestId
        },
        refetchQueries: [
          {query: QUERY_SINGLE_REQUEST,
            variables: {
              id: requestId
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


  const handleInputChange = (event) => {
    // const userInput = event.target.value;
    // setUserInput({ ...userInput})
    setUserInput(event.target.value);
  }

  console.log('Form renders');

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-textarea"
          label="Comment Here"
          placeholder="Comment"
          name="body"
          value={userInput}
          onChange={handleInputChange}
          multiline
        />
      </div>
      <FunkButton onClick={ handleSubmit } value="Submit Comment" />
    </Box>
  );
}