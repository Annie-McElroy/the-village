import * as React from 'react';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import FunkButton from '../FunkButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DELETE_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

export default function DisplayComment({ comments }) {

    const [deleteCommentMutation, { data, loading, error }] = useMutation(DELETE_COMMENT);

    if (loading) return 'Deleting...';
    if (error) return `Delete error! ${error.message}`;

    const handleMutation = async (id) => {
        try {
            await deleteCommentMutation({
                variables: {
                    id: id
                }
            });
        }
        catch (error) {
            console.error('Mutation error: ', error.message);
        }
    };

    const handleDelete = async (event, id) => {
        event.preventDefault();
        try {
            handleMutation(id);
        }
        catch (error) {
            console.error('Mutation error: ', error.message);
        }
    };

    return (
        <div>
            {
                comments.map((comment) => (
                    <Card key={comment._id}>
                        <CardContent>
                            <Typography>By: {comment.authorId.username}, Date: {comment.createdAt}</Typography>
                            <Typography>{comment.body}</Typography>
                            <FunkButton value={<DeleteIcon />} onClick={(event) => handleDelete(event, comment._id)} id={comment._id} />
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
}