import React from "react";
import { useAuth } from "../Context/AuthProvider";
import "./Style/login.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const authCtx = useAuth();
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target.children[0].value;
    const password = e.target.children[1].value;
    console.log("Arya", email, password);
    try {
      const currentUser = await authCtx.logIn(email, password);
      authCtx.setCurrentUser(currentUser);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <h2>Log In Here</h2>
          <div className="user-details-login-container">
            <form
              action=""
              className="login-form"
              onSubmit={(e) => handleLogin(e)}
            >
              <input type="email" placeholder="Enter your Id" />
              <input type="password" placeholder="Enter your Password" />
              <button>Log In</button>
            </form>
          </div>
        </div>
        <h5>If you have not an account, <Link to={"/signup"}>Sign Up from here</Link> </h5>
      </div>
    </>
  );
};

export default LoginPage;
