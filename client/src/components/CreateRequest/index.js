import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CreateRequest() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Ask the Village!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Make a request!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ask the village for help here:
          </DialogContentText>
          <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder="Title"
        />
        <TextField
          id="outlined-number"
          label="Number of Crayons"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          id="outlined-textarea"
          label="Request Description"
          placeholder="Description"
          multiline
          maxRows={4}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}