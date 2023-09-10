import React from "react";
import LoginForm from "../components/LoginForm";
import AuthService from "../utils/auth";
import './styles/home.css'




const Home = () => {
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="layered-village base" alt="base"></div>
        <div className="layered-village foreground" alt="foreground"></div>
        <div className="layered-village clouds" alt="foreground"></div>

      </div>
      {AuthService.loggedIn()
        ? (<div>Logged In!</div>)
        : (<LoginForm />)
      }
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default Home;