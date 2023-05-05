


import React from "react";
import { createContext } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    // Google Sign-in Provider
    const googleProvider = new GoogleAuthProvider();
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");

    // GitHub Sign-in Provider
    const githubProvider = new GithubAuthProvider();



    const authInfo = { createUser, user, logOut, loginUser, googleProvider, };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;