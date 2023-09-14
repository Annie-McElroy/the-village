import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function CreateReqButton(props) {
  return (

      <Button variant="contained" component={Link} to={props.url}>
        Ask the Village!
      </Button>

  );
}