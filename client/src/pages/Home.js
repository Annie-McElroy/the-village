import React from "react";
import LoginForm from "../components/LoginForm";
import AuthService from "../utils/auth";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import './styles/home.css';



const Home = () => {
  return (
    <div className="landing-page">
      <div className="div">

        <div className="banner">
          <div className="layered-village base" alt="base"></div>
          <div className="layered-village foreground" alt="foreground"></div>
          <div className="layered-village clouds" alt="foreground"></div>
        </div>

        <div className="text-wrapper">Welcome to The Village!</div>

        <p className="p">
          <Button
            color="secondary"
            size="large"
            variant="contained"
            href="/signup"
          > <div className="text-wrapper-5">Sign Up</div></Button>
          </p>
          <p className="p" id="subheading-for-signup">Connect to your village today!</p>

        <div className="overlap-group">
          <p className="text-wrapper-2">Already a Villager? Welcome back!</p>
          <LoginForm className="login-form" />

          <Button
            className="button-instance"
            variant="contained"
            size="regular"
            state="default"
            type="primary"
            component={Link} to="/what-is-the-village"
          ><span><ArrowCircleRightOutlinedIcon />{'\u00A0'}{'\u00A0'}</span> What is the Village? </Button>
          <Button
            className="button-instance"
            variant="contained"
            size="regular"
            state="default"
            type="primary"
            component={Link} to="/about"
          ><span><ArrowCircleRightOutlinedIcon />{'\u00A0'}{'\u00A0'}</span> All about our team </Button>
          

        </div>


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