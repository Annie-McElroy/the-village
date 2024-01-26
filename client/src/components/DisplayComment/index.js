import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import FunkButton from '../FunkButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DELETE_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

export default function DisplayComment({ comments }) {
    const [commentList, setCommentList] = useState(comments); // using state to manage comments

    useEffect(() => {
        setCommentList(comments); // Update comments when props change
    }, [comments]);

    const [deleteCommentMutation, { data, loading, error }] = useMutation(DELETE_COMMENT);

  if (loading) return "Deleting...";
  if (error) return `Delete error! ${error.message}`;

    const handleDelete = async (id) => {
        try {
            await deleteCommentMutation({
                variables: {
                    id: id
                }
            });
            // Update commentList after successful deletion by filtering through the array of previous comments and removing comments by id that are no longer listed
            setCommentList(prevComments => prevComments.filter(comment => comment._id !== id));
        } catch (error) {
            console.error('Mutation error: ', error.message);
        }
    };

    // console.log('Display Comments render')

    return (
        <div>
            {
                commentList.map((comment) => (
                    <Card key={comment._id}>
                        <CardContent>
                            <Typography>By: {comment.authorId.username}, Date: {comment.createdAt}</Typography>
                            <Typography>{comment.body}</Typography>
                            <FunkButton value={<DeleteIcon />} onClick={() => handleDelete(comment._id)} />
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
}
