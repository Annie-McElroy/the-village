import * as React from 'react';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function DisplayComment({ comments }) {
    return (
        <div>
            {
                comments.map((comment) => (
                    <Card key={comment._id}>
                        <CardContent>
                            <Typography>By: {comment.authorId.username}, Date: {comment.createdAt}</Typography>
                            <Typography>{comment.body}</Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
}