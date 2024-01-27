import React from "react";
import LoginPage from "./LoginPage";
import './Style/main.css'
const Main = () => {
  return (
    <>
      <main className="main">
        <header className="header">
          <div className="box">This is Home page</div>
          <div className="login-btn">
            <LoginPage />
          </div>
        </header>
      </main>
    </>
  );
};

export default Main;
