import React from "react";
// import LoginForm from "../components/LoginForm";
import Crayon from "../components/Crayons";
import ClaimRequestButton from "../components/ClaimRequestButton";


const Home = () => {
  return (
    <div className="landing-page">
      <div className="div" style={{ position: 'relative' }}>
        <img className="layered-village base" alt="Layered village" src="/icons/layered-village-base-1.png" />
        <img className="layered-village foreground" alt="Layered village" src="/icons/layered-village-foreground-1.png" />
        <img className="layered-village clouds" alt="Layered village" src="/icons/layered-village-clouds-1.png" />
        <Crayon />
        <ClaimRequestButton />
      </div>
    </div>
  );
};

export default Home;