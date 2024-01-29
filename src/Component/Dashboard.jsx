import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../Context/AuthProvider';

const Dashboard = () => {
  const authCtx = useAuth();
  console.log(authCtx);
  const navigate = useNavigate();
useEffect(()=>{
  if(Object.keys(authCtx.currentUser).length === 0){
    navigate("/login");
  }

},[]);
async function logOut(){
  try {
    await authCtx.logOut();
    authCtx.setCurrentUser({});
    navigate("/");

  } catch (error) {
    console.log(error);
  }
}

if(Object.keys(authCtx.currentUser).length === 0){
return (
  <>
  <h1>Loading...</h1>
  </>
)}
  return (
    <>
    <h1>
    Congratulations Arya! Now, You are the member of Us.
    </h1>
    <button onClick={logOut}>Logout</button>


    </>
  )
}

export default Dashboard
