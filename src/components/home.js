import React, { Component } from "react";
import Login from "./Home/login";
import Aceluzr from "../images/Acealyze.png";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="leftSide">
          <a href="https://www.aces-co.com/" rel="noreferrer" target="_blank">
            {/* <img className="logo_logo" src={Aceluzr} alt="logo-img" /> */}
          </a>
          <Login />
        </div>
      </div>
    </>
  );
};
export default Home;
