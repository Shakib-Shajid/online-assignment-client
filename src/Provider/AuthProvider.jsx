import { createContext, useEffect, useState } from "react";
// import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
// import { FaAppStore } from "react-icons/fa";
import app from '../firebase/firebase.config'
export const AuthContext = createContext(null);



const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    // loading
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)


    }

    //sign in
    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }



    const authInfo = {
        user,
        loading,
        createUser,

        signIn,
        logOut



    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;