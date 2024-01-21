import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function CommentFormButton({ onClick }) {
    return (

        <Button variant="contained" onClick={onClick}>
            Submit Comment
        </Button>
    );
}