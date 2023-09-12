import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function EditVillage() {
  return (
    <Card
      component="form"
      sx={{
        '& .MuiTextField-root': { mx: 30, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder='Village Name'
        />
         <TextField 
         id="outlined-search" 
         label="Zip Code" 
         type="search"
         />
         <TextField 
         id="outlined-search" 
         label="Villagers" 
         type="search"
         />
        </div>
        <Button variant="contained" component={Link} to="/village/:id/">
        Update Village!
      </Button>
    </Card>
  );
}