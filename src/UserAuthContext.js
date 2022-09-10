import React, {createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { auth } from "./firebase";




const userAuthContext = createContext();

export function UserAuthContextProvider({ children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setloading] = useState(true);

    function logIn(email,password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('Auth', user);
            setCurrentUser(user);
            setloading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);
    if (loading) {
        return <p>loading...</p>
    }




    return (
        <userAuthContext.Provider
        value={{currentUser, logIn, signUp, logOut}}>
            {children}
            </userAuthContext.Provider>
    );
}
export function useUserAuth() {
    return useContext(userAuthContext);
}