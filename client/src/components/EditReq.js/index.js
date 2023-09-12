import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

export default function EditReq() {
  const [userInput, setUserInput] = useState('');
  const [userInput2, setUserInput2] = useState('');
  const [userInput3, setUserInput3] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }; 
  const handleInputChange2 = (e) => {
    setUserInput2(e.target.value);
  }; 
  const handleInputChange3 = (e) => {
    setUserInput3(e.target.value);
  }; 

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
          required
          fullWidth
          id="outlined-required"
          label="Required"
          placeholder="Title"
          value={userInput}
          onChange={handleInputChange}
        />
        <TextField
          required
          fullWidth
          id="outlined-textarea"
          label="Description"
          placeholder="Description"
          value={userInput2}
          onChange={handleInputChange2}
          multiline
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={userInput3}
          onChange={handleInputChange3}
        />
        <Card variant="h6" gutterBottom>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title: {userInput}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {userInput2}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Crayons: {userInput3}
          </Typography>
        </CardContent>
        <Button variant="contained" href="/village/:id/">
        Update Request
      </Button>
      </Card>
      </div>
    </Box>
  );
}