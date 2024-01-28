import React,{useContext} from 'react'
import { useAuth } from '../Context/AuthProvider';

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
        const response = await authCtx.signUp(
            email, password
        );
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

  return (
    <>
    <div className="signup-container">
        <form action="" className="signup-form" onSubmit={(e)=>appendUser(e)}>
            <h2>Sign Up Here</h2>
            <input type="email" placeholder='Enter Your Id'/>
            <input type="password" name="" id="" placeholder='Enter Your Password'/>
            <input type="password" name="" id="" placeholder='Enter Your Password Again'/>
            <button>Submit</button>
        </form>
    </div>
    </>
  )
}

export default SignUp
