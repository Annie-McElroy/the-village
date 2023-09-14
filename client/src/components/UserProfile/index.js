import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import '../../pages/styles/profile.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import { AccountCircle, EmailRounded, PinDropRounded, DrawRounded } from '@mui/icons-material';


export default function ProfileInfo({ villager }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.location.assign(`/profile/${villager._id}/edit-profile`)

    console.log(villager)
  };

  return (
    <Card sx={{ maxWidth: 500}}>
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
      <CardContent style={{ textAlign: 'center'}}>
        <Typography style={{}} variant="body2" color="text.secondary">
          <h2><DrawRounded />Crayons: {villager.crayons[0].amount}</h2>
        </Typography>
      </CardContent>

      <CardContent>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
      <ListItemText
        primary={
          <Typography>First Name:  
            {villager.firstName}
          </Typography>
          }
        />
        </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
      <ListItemText
        primary={
          <Typography>Last Name:  
            {villager.lastName}
          </Typography>
          }
        />
        </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <EmailRounded />
        </ListItemIcon>
      <ListItemText
        primary={
          <Typography>Email:  
            {villager.email}
          </Typography>
          }
        />
        </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <PinDropRounded />
        </ListItemIcon>
      <ListItemText
        primary={
          <Typography>Zipcode: 
            {villager.zipcode}
          </Typography>
          }
        />
        </ListItem>
      </List>
        <Button 
          color="primary"
          size="large"
          variant="filled"
          onClick={handleClick}>Edit Your Profile</Button>
      </CardContent>
    </Card>
  );
}