import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PinDropIcon from '@mui/icons-material/PinDrop';
// import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useMutation } from '@apollo/client';
import { UPDATE_VILLAGER } from '../../utils/mutations';

// const options = ['Female', 'Male', 'Prefer not to say'];

export default function EditProfile(props) {
  // const [value, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState('');

  const [formState, setFormState] = useState({
    username: props.villager.username,
    firstName: props.villager.firstName,
    lastName: props.villager.lastName,
    email: props.villager.email,
    zipcode: props.villager.zipcode
  })

  console.log(props.villager)
  
  const [updateVillagerMutation, {data, loading, error }] = useMutation(UPDATE_VILLAGER);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = async () => {
    // if (window.confirm('Press okay to confirm these changes.')) {
      try {
        await updateVillagerMutation({
          variables: {
            ...formState
            // email: formState.email,
            // firstName: formState.firstName,
            // lastName: formState.lastName,
            // username: formState.username,
            // zipcode: formState.zipcode
          },
        });


        // window.location.assign(`/profile/${props.villager._id}`)

        console.log('Updated')

      } catch (mutationError) {
        console.error('Mutation error:', mutationError);
      }
    // }
  };

  const handleEdit = async (event) => {
    const {name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  return (
    <Card sx={{ mx: 10, mb: 5 }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ mr: 1, my: 0.5 }}/>
        <TextField fullWidth id="input-with-sx" label="First Name" variant="standard" name="firstName" value={formState.firstName} defaultValue={props.villager.firstName} onChange={handleEdit}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ mr: 1, my: 0.5 }} />
        <TextField fullWidth id="input-with-sx" label="Last Name" variant="standard" name="lastName" value={formState.lastName} defaultValue={props.villager.lastName} onChange={handleEdit}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ mr: 1, my: 0.5 }} />
        <TextField fullWidth id="input-with-sx" label="Username" variant="standard" name="username" value={formState.username} defaultValue={props.villager.username} onChange={handleEdit}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AlternateEmailIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField fullWidth id="input-with-sx" label="Email" variant="standard" name="email" value={formState.email} defaultValue={props.villager.email} onChange={handleEdit}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PinDropIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField fullWidth id="input-with-sx" label="Zip Code" variant="standard" defaultValue={props.villager.zipcode} name="zipcode" value={formState.zipcode} onChange={handleEdit}/>
        {/* <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 800 }}
        renderInput={(params) => <TextField {...params} label="Gender" />}
      /> */}
      </Box>
      <Button
            color="tertiary"
            size="large"
            variant="contained"
            // href="/profile/:id"
            onClick={handleSubmit}
            className="email-2"> <div className="text-wrapper-5">Approve Changes to Profile</div></Button>
    </Card>
  );
}
