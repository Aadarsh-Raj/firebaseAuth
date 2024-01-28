import {useState, createContext, useContext } from "react";
import { auth } from "../Component/firebase";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
const AuthContext = createContext({});
export const useAuth = ()=>{
    return useContext(AuthContext);
}



const AuthProvider = (prop)=>{
const {currentUser, setCurrentUser} = useState({});

const auth = getAuth();

const signUp = (email, password)=> {
   return createUserWithEmailAndPassword(auth, email, password);
};
const authData={
    currentUser, setCurrentUser, signUp
}

return (<>
<AuthContext.Provider value={authData}>{prop.children}</AuthContext.Provider>

</>)
}
export default AuthProvider;