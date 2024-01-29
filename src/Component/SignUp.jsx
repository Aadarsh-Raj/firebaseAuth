import React,{useContext} from 'react'
import { useAuth } from '../Context/AuthProvider';
import './Style/signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
const authCtx = useAuth();


async function appendUser(e){
    e.preventDefault();
    console.log("Arya");
    const email = e.target.children[1].value;
    const password = e.target.children[2].value;
    const confPassword = e.target.children[3].value;

    if(password != confPassword){
        alert("Check your password");
        return;
    }
    try {
        const currentUser = await authCtx.signUp(
            email, password
        );
        authCtx.setCurrentUser(currentUser);
    } catch (error) {
        console.log(error);
    }
}

  return (
    <>
    <div className="signup-page">
        <form action="" className="signup-form" onSubmit={(e)=>appendUser(e)}>
            <h2>Sign Up Here</h2>
            <input type="email" placeholder='Enter Your Id'/>
            <input type="password"  placeholder='Enter Your Password'/>
            <input type="password"  placeholder='Enter Your Password Again'/>
            <button>Submit</button>
        </form>
        <h5>If already have an accout, <Link to={"/login"}>Log in from here</Link> </h5>
    </div>
    </>
  )
}

export default SignUp
