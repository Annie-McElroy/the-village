import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_VILLAGER } from '../../utils/mutations';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Email, Lock, Draw, AccountCircle, Badge, AddLocationAlt } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_VILLAGER);

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
          username: formState.username,
          zipcode: formState.zipcode,
          crayons: {
            amount: +formState.crayons
          }
        },
      });
      // console.log(mutationResponse);
      const user = mutationResponse.data.addVillager.user;
      const token = mutationResponse.data.addVillager.token;
      Auth.login(token);
      navigate(`/profile/${user._id}`);

    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 signup-form">
      <Typography className="signup-heading">Connect to your Village Today!</Typography>
      <form onSubmit={handleFormSubmit}>
        <div className="input">
          <div className="flex-row space-between my-2 frame">
            <span>
              <AccountCircle style={{ color: '#CCCCCC' }} />
            </span>
            <div className="email-2">
              <label htmlFor="firstName" className="text-wrapper-3">First Name:</label>
              <input
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
                className="text-wrapper-4"
              />
            </div>
          </div>
          <div className="flex-row space-between  my-2 frame">
            <span>
              <AccountCircle style={{ color: '#CCCCCC' }} />
            </span>

            <div className="email-2">
              <label htmlFor="lastName">Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
                className="text-wrapper-4"
              />
            </div>
          </div>
          <div className="flex-row space-between  my-2 frame">
            <span>
              <Badge style={{ color: '#CCCCCC' }} />
            </span>

            <div className="email-2">
              <label htmlFor="username">Username:</label>
              <input
                placeholder="Username"
                name="username"
                type="username"
                id="username"
                onChange={handleChange}
                className="text-wrapper-4"
              />
            </div>
          </div>
          <div className="flex-row space-between  my-2 frame">
            <span>
              <AddLocationAlt style={{ color: '#CCCCCC' }} />
            </span>
            <div className="email-2">
              <label htmlFor="zipcode">Zipcode:</label>
              <input
                placeholder="Zipcode"
                name="zipcode"
                type="zipcode"
                id="zipcode"
                onChange={handleChange}
                className="text-wrapper-4"
              />
            </div>
          </div>
          <div className="flex-row space-between  my-2 frame">
            <span>
              <Draw style={{ color: '#CCCCCC', }} />
            </span>
            <div className="email-2">
              <label htmlFor="crayons">Crayons:</label>
              <input
                placeholder="Crayons"
                name="crayons"
                type="number"
                id="crayons"
                onChange={handleChange}
                className="text-wrapper-4"
              />
            </div>
          </div>
          <div className="flex-row space-between  my-2 frame">
            <span>
              <Email style={{ color: '#CCCCCC', }} />
            </span>
            <div className="email-2">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                className="text-wrapper-4"
              />
            </div>
          </div>
          <div className="flex-row space-between  my-2 frame">
            <span>
              <Lock style={{ color: '#CCCCCC' }} />
            </span>
            <div className="email-2">
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
                className="text-wrapper-4"
              />
            </div>
          </div>
          <div className="flex-row flex-end email-wrapper">
            <Button
              color="secondary"
              size="large"
              variant="contained"
              onClick={handleFormSubmit}
              className="email-2">
              <div className="text-wrapper-5">Sign Up</div>
            </Button>

          </div>
        </div>
      </form>
    </div>
  );
};


