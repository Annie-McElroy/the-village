import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CommentFormButton from '../CommentFormButton';

export default function CommentForm(props) {

  const handleInputChange = (event) => {
    props.setUserInput(event.target.value);
  }

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
          value={props.userInput}
          onChange={handleInputChange}
          multiline
        />
      </div>
      <CommentFormButton onClick={ props.onClick }/>
    </Box>
  );
}