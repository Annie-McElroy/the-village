import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FunkButton from '../FunkButton';
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
// import { QUERY_SINGLE_REQUEST } from '../../utils/queries';

export default function CommentForm({ requestId, setCommentList }) {

  const [userInput, setUserInput] = useState('');

  // Creates state using the array of comments given in request object (sent as a prop from DisplaySingleRequest)
  // const [commentsList, setCommentList] = useState(comments);

  // const addComment = (comment) => {
  //   console.log('AddComment called')
  //   setCommentList((prevComments) => [...prevComments, comment])
  // }

  // useEffect updates the DOM after props/state has changed (pretty much runs the re-render)
  // When the comments array changes useEffect will run
  // useEffect(() => {
  //   setCommentList(comments);
  // }, [comments]);

  const [addCommentMutation, { data, loading, error }] = useMutation(ADD_COMMENT);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleMutation = async (userInput) => {
    try {
      // console.log('Mutation runs')
      const comment = await addCommentMutation({
        variables: {
          body: userInput,
          requestId: requestId
        },
      });
      // await addCommentMutation({
      //   variables: {
      //     body: userInput,
      //     requestId: requestId
      //   },
        // Possible way to replace refetchQueries is bring in the comment array as a prop, create a state using useState, change state by pushing the new comment into the comment array
        // refetchQueries: [
        //   {query: QUERY_SINGLE_REQUEST,
        //     variables: {
        //       id: requestId
        //     }
        //   }
        // ]
      // });
      // console.log('Mutation ends', comment.data.addComment);
      // addComment(comment)

      setCommentList(prevComment => [...prevComment, comment.data.addComment])
    } 
    catch (error) {
      console.error('Mutation error: ', error.message)
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      handleMutation(userInput);
      setUserInput('')
    } 
    catch (error) {
      console.error('Mutation error: ', error.message)
    }
  };


  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  // console.log('Form renders');

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