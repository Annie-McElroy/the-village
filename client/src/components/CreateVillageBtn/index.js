import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function CreateVillageBttn() {
  return (

      <Button variant="contained" component={Link} to="/village/create-village">
        Start your own!
      </Button>

  );
}