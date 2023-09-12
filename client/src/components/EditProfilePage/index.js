import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Female', 'Male', 'Prefer not to say'];

export default function EditProfile() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  
  return (
    <Card sx={{ mx: 50, mb: 5 }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField required fullWidth id="input-with-sx" label="First Name" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField required fullWidth id="input-with-sx" label="Last Name" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField required fullWidth id="input-with-sx" label="Username" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField required fullWidth id="input-with-sx" label="Email" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PinDropIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField required fullWidth id="input-with-sx" label="Zip Code" variant="standard" />
        <Autocomplete
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
      />
      </Box>
    </Card>
  );
}
