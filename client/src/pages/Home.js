import React from "react";
import LoginForm from "../components/LoginForm";
import AuthService from "../utils/auth";




const Home = () => {
  return (
    <div className="landing-page">
      <div className="hero-banner">
        <img className="layered-village base" alt="Layered village" src="/icons/layered_village_base.png" />
        <img className="layered-village foreground" alt="Layered village" src="/icons/layered_village_foreground.png" />
        <img className="layered-village clouds" alt="Layered village" src="/icons/layered_village_clouds.png" />
          
      </div>
    {AuthService.loggedIn()
    ? (<div>Logged In!</div>)
    : (<LoginForm />)
    }
  <div style={{height: '80px'}}></div>
    </div>
  );
};

export default Home;