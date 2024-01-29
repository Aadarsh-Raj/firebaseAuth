import './App.css';
import AuthProvider from './Context/AuthProvider';
import Main from './Component/Main';
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import LoginPage from './Component/LoginPage';
import SignUp from './Component/SignUp';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main />
    },
    {
      path:'/signup',
      element:<SignUp />
    },
    {
      path:"/login",
      element:<LoginPage />
    }
  ]);
  return (
    <>
  <AuthProvider>
<RouterProvider router={router} />


  </AuthProvider>
   
    </>
  );
}

export default App;
