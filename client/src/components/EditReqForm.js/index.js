import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import { UPDATE_REQUEST } from "../../utils/mutations";
import { useNavigate, useParams } from "react-router-dom";

export default function EditReqForm({ title, desc, crayon }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    title: title,
    body: desc,
    crayons: crayon
  });

  // const [titleInput, setTitleInput] = useState(`${title}`);
  // const [descInput, setDescInput] = useState(`${desc}`);
  // const [crayonInput, setCrayonInput] = useState(crayon);

  const [updateRequestMutation, { data, loading, error }] =
    useMutation(UPDATE_REQUEST);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const handleEdit = async (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleInputChange = (e) => {
  //   setTitleInput(e.target.value);
  // };
  // const handleInputChange2 = (e) => {
  //   setDescInput(e.target.value);
  // };
  // const handleInputChange3 = (e) => {
  //   setCrayonInput(e.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(id, formState);
      await updateRequestMutation({
        variables: {
          id: id,
          title: formState.title,
          body: formState.body,
          crayons: parseInt(formState.crayons)
        },
      });

      navigate(-1);
    } catch (error) {
      console.error("Mutation error: ", error.message);
    }
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
          name="title"
          placeholder="Title"
          value={formState.title}
          onChange={handleEdit}
        />
        <TextField
          required
          fullWidth
          id="outlined-textarea"
          label="Description"
          name="body"
          placeholder="Description"
          value={formState.body}
          onChange={handleEdit}
          multiline
/*
          Setting the maxRows and minRows below will avoid the rendering loop error that arises in development mode. This error is not occurring in production. 
*/

          // maxRows={7}
          // minRows={5}
        />
        <TextField
          id="outlined-number"
          label="Number"
          name="crayons"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={formState.crayons}
          onChange={handleEdit}
        />
        <Card variant="h6" gutterBottom>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title: {formState.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {formState.body}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crayons: {formState.crayons}
            </Typography>
          </CardContent>
          <Button variant="contained" onClick={handleSubmit}>
            Update Request
          </Button>
        </Card>
      </div>
    </Box>
  );
}
