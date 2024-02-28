import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function EditReqForm({ title, desc, crayon }) {
  // console.log(request);
  // console.log(request.title);
  const [titleInput, setTitleInput] = useState(`${title}`);
  const [descInput, setDescInput] = useState(`${desc}`);
  const [crayonInput, setCrayonInput] = useState(crayon);

  const handleInputChange = (e) => {
    setTitleInput(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setDescInput(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setCrayonInput(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Title"
          placeholder="Title"
          value={titleInput}
          onChange={handleInputChange}
        />
        <TextField
          required
          fullWidth
          id="outlined-textarea"
          label="Description"
          placeholder="Description"
          value={descInput}
          onChange={handleInputChange2}
          multiline
          // These rows resolve the infinite loop error when loading the form on development mode. The form works without it in production (deployed site) so the rows are not 'needed' and should remain commented out unless in development mode.
          // maxRows={7}
          // minRows={5}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={crayonInput}
          onChange={handleInputChange3}
        />
        <Card variant="h6" gutterBottom>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title: {titleInput}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {descInput}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crayons: {crayonInput}
            </Typography>
          </CardContent>
          <Button variant="contained" href="/village/:id/">
            Update Request
          </Button>
        </Card>
      </div>
    </Box>
  );
}
