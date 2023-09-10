import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function CreateVillage() {
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
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
         <TextField 
         id="outlined-search" 
         label="Search field" 
         type="search"
         />
         <TextField 
         id="outlined-search" 
         label="Search field" 
         type="search"
         />
        </div>
        <Button variant="contained" component={Link} to="/village/:id/">
        Create Village!
      </Button>
    </Box>
  );
}