import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../../pages/styles/profile.css';


export default function ProfileInfo({ villager }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.location.replace(`/profile/${villager._id}/edit-profile`)

    console.log(villager)
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        // avatar={
        //   <Avatar
        //     alt="User Avatar"
        //     src={props.avatarSrc} // Use the prop for the avatar source
        //     sx={{ width: 56, height: 56 }}
        //   />
        // }
        title={villager.username} // Use the prop for the title
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h2><img src="/images/pencil-crayon_6603971.png" height={35} />Crayons: {villager.crayons[0].amount}</h2>
        </Typography>
      </CardContent>

      <CardContent >
        <Typography paragraph>{villager.firstName}</Typography>
        <Typography paragraph>{villager.lastName}</Typography>
        <Typography paragraph>{villager.zipcode}</Typography>
        <Typography paragraph>{villager.email}</Typography>
        <Button color="primary"
          size="large"
          variant="filled"
          onClick={handleClick}>Edit Your Profile</Button>
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

        </CardContent>
      </Collapse>
    </Card>
  );
}