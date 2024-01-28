import React from "react";
import LoginPage from "./LoginPage";
import "./Style/main.css";
import SignUp from "./SignUp";
import AuthProvider from "../Context/AuthProvider";
// import firebase from "./firebase";

const Main = () => {
  return (
    <>
      <main className="main">
        <header className="header">
          <div className="box">This is Home page</div>
          <div className="login-btn">
            <AuthProvider>
              <SignUp />
              <LoginPage />
            </AuthProvider>
          </div>
        </header>
      </main>
    </>
  );
};

export default Main;
