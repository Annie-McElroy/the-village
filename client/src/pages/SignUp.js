import React from 'react';
import Signup from '../components/CreateAccount'
import AuthService from "../utils/auth";
import './styles/home.css'
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
  }
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="layered-village base" alt="base"></div>
        <div className="layered-village foreground" alt="foreground"></div>
        <div className="layered-village clouds" alt="foreground"></div>

      </div>
      <div>
      <button onClick={goBack}>Back</button>
      </div>
      {AuthService.loggedIn()
        ? (<div>Signed In!</div>)
        : (<Signup />)
      }
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default Home;