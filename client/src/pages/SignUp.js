import React from 'react';
import Signup from '../components/CreateAccount'
import AuthService from "../utils/auth";
import './styles/home.css'
import BackMeUp from '../components/BackBtn';

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
        : (<Signup />)
      }
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default Home;