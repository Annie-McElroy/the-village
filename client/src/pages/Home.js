import React from "react";
// import LoginForm from "../components/LoginForm";
import Crayon from "../components/Crayons";
import ClaimRequestButton from "../components/ClaimRequestButton";


const Home = () => {
  return (
    <div className="container">
      {/* <Nav /> */}
      <Crayon />
      <ClaimRequestButton />
    </div>
  );
};

export default Home;