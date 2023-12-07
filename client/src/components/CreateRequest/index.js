import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { QUERY_VILLAGE, QUERY_VILLAGER } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_REQUEST } from '../../utils/mutations';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../utils/auth';


export default function CreateReq({villageId, villagerId}) {

  const navigate = useNavigate();

  // console.log(villageId);

  const [userInput, setUserInput] = useState('');
  const [userInput2, setUserInput2] = useState('');
  const [userInput3, setUserInput3] = useState('');

  const [addRequestMutation, { data, loading, error }] = useMutation(ADD_REQUEST);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setUserInput2(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setUserInput3(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRequestMutation({
        variables: {
          title: userInput,
          body: userInput2,
          crayons: parseInt(userInput3),
          village: villageId
        },
        refetchQueries: [
          {query: QUERY_VILLAGE,
            variables: {
              id: villageId
            }
          },
          {query: QUERY_VILLAGER,
            variables: {
              id: villagerId
            }
          }
        ]
      });

      navigate(`/village`);

    }
    catch (error) {
      console.error('Mutation error:', error.message);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Required"
          name="title"
          placeholder="Title"
          value={userInput}
          onChange={handleInputChange}
        />
        <TextField
          required
          fullWidth
          id="outlined-textarea"
          label="Description"
          name="body"
          placeholder="Description"
          value={userInput2}
          onChange={handleInputChange2}
          multiline
        />
        <TextField
          id="outlined-number"
          label="Number"
          name="crayons"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={userInput3}
          onChange={handleInputChange3}
        />
        <Card variant="h6" gutterBottom>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title: {userInput}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {userInput2}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Crayons: {userInput3}
            </Typography>
          </CardContent>
          <Button variant="contained" onClick={handleSubmit}>
            Submit Request
          </Button>
        </Card>
      </div>
    </Box>
  );
}

