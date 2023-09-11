import React from "react";
import LoginForm from "../components/LoginForm";
import AuthService from "../utils/auth";
import Button from '@mui/material/Button';
import './styles/home.css'




const Home = () => {
  return (
    <div className="landing-page">
      <div className="div">

        <div className="banner">
          <div className="layered-village base" alt="base"></div>
          <div className="layered-village foreground" alt="foreground"></div>
          <div className="layered-village clouds" alt="foreground"></div>
        </div>

        <div className="text-wrapper">Welcome to the Village!</div>

        <p className="p">
        <Button
            color="secondary"
            size="large"
            variant="contained"
            href="/signup"
            > <div className="text-wrapper-5">Sign Up</div></Button>
        <br /><br />Connect to your village today!</p>
        <p className="text-wrapper-2">Already a Villager? Welcome back!</p>
        <LoginForm className="login-CTA-2" />

      

        {/* {AuthService.loggedIn()
        ? (<div>Logged In!</div>)
        : (<LoginForm />)
      } */}
        <div style={{ height: '80px' }}></div>

      </div>
    </div>
  );
};

export default Home;