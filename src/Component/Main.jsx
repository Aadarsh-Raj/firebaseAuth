import React from "react";
import LoginPage from "./LoginPage";
import "./Style/main.css";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <main className="main">
       <h2>MERN STACK WEB DEVELOPER</h2>
          <h3>Be a member of Us <Link to={"/signup"}>Click Here</Link></h3>
          
      
      </main>
    </>
  );
};

export default Main;
