import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="User Avatar"
            src={props.avatarSrc} // Use the prop for the avatar source
            sx={{ width: 56, height: 56 }}
          />
        }
        title={props.title} // Use the prop for the title
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description} {/* Use the prop for the description */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>LinkedIn:</Typography>
          <Typography paragraph>{props.linkedIn}</Typography>
          <Typography paragraph>GitHub:</Typography>
          <Typography paragraph>{props.gitHub}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}