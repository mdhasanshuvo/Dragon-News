/* eslint-disable react-refresh/only-export-components */

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    console.log(user);


    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
        signOut(auth);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authValues = {
        user,
        setUser,
        signUp,
        logout,
        signIn,
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
    },[]);

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;