import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import ClaimRequestButton from '../ClaimRequestButton';
import Comments from '../Comment';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt="user icon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Request Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Request Description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ClaimRequestButton />
      </CardActions>
      <CardActions>
        <Comments />
      </CardActions>
    </Card>
  );
}