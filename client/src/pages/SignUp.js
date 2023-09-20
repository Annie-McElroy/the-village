import React from 'react';
import Signup from '../components/Signup'
import './styles/home.css'
import './styles/signup.css'
import BackMeUp from '../components/BackBtn';
import AuthService from "../utils/auth";


const Home = () => {
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="layered-village base" alt="base"></div>
        <div className="layered-village foreground" alt="foreground"></div>
        <div className="layered-village clouds" alt="foreground"></div>

      </div>
      <div>
        <BackMeUp />
      </div>
      {AuthService.loggedIn()
        ? (<div>Signed In!</div>)
        : (<Signup className="signup-form" />)
      }
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default Home;