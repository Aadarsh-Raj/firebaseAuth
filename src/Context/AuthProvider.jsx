import {useState, createContext, useContext } from "react";
import { auth } from "../Component/firebase";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
const AuthContext = createContext({});
export const useAuth = ()=>{
    return useContext(AuthContext);
}



const AuthProvider = (prop)=>{
const [currentUser, setCurrentUser] = useState({});
const auth = getAuth();

const signUp = (email, password)=> {
   return createUserWithEmailAndPassword(auth, email, password);
};

const logIn = (email, password) =>{
return signInWithEmailAndPassword(auth, email, password);
};
const logOut = ()=>{
    return signOut(auth);
}

const authData={
    currentUser, setCurrentUser, signUp, logIn, logOut
}

return (<>
<AuthContext.Provider value={authData}>{prop.children}</AuthContext.Provider>

</>)
}
export default AuthProvider;