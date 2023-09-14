import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Button from '@mui/material/Button';
import { Email, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



export default function LoginForm(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [LoginForm, { error }] = useMutation(LOGIN);

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await LoginForm({
        variables: { email: formState.email, password: formState.password },
      });
      const user = mutationResponse.data.login.user;
      const token = mutationResponse.data.login.token;     

      Auth.login(token);

      navigate(`/what-is-the-village`)

      console.log()

      // window.location.replace(`/profile/${user._id}`);
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
    <div className="container my-1 login-form">
      <form onSubmit={handleFormSubmit}>
        <div className="input">
          <div className="flex-row space-between my-2 frame">
            <span>
              <Email style={{ color: '#CCCCCC', }} />
            </span>
            <div className="email-2">

              <label htmlFor="email" className="text-wrapper-3"> Email address: </label>
              <input
                placeholder="youremail@email.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                className="text-wrapper-4"
              />
            </div>
          </div>
          <div className="flex-row space-between my-2 frame">
            <span>
              <Lock style={{ color: '#CCCCCC' }} />
            </span>
            <div className="email-2">
              <label htmlFor="pwd" className="text-wrapper-3">Password:</label>
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
        </div>
        {error
          ? (<div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>)
          : null}
        <div className="flex-row flew-end email-wrapper">
          <Button
            color="tertiary"
            size="large"
            variant="contained"
            onClick={handleFormSubmit}
            className="email-2"> 
            <div className="text-wrapper-5">Login</div>
            </Button>
        </div>
      </form>
    </div>
  );
};