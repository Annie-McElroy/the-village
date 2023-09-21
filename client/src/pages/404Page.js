import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Oops! Looks like our crayons fell out of the box!</h1>
      <p>Help us clean up by:</p>
      <Link to ='/'>Sending us back Home</Link>
    </div>
  )
}