import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function CreateReqButton() {
  return (

      <Button variant="contained" component={Link} to="/village/:id/create-request">
        Ask the Village!
      </Button>

  );
}