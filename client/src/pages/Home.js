import React from "react";
// import LoginForm from "../components/LoginForm";
import Crayon from "../components/Crayons";
import ClaimRequestButton from "../components/ClaimRequestButton";
import Village from "./Village";
import Nav from "../components/Nav";


const Home = () => {
  return (
    <div className="landing-page">
      <div className="hero-banner" style={{ position: 'relative' }}>
        <img className="layered-village base" alt="Layered village" src="/icons/layered-village-base-1.png" />
        <img className="layered-village foreground" alt="Layered village" src="/icons/layered-village-foreground-1.png" />
        <img className="layered-village clouds" alt="Layered village" src="/icons/layered-village-clouds-1.png" />
        <Crayon />
        <ClaimRequestButton />
        <div><Village /></div>
      <footer><Nav /></footer>
      </div>
    </div>
  );
};

export default Home;