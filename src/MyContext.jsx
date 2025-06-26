import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../src/firebase.init';
import axios from 'axios';
export const MyContext = createContext();
const provider = new GoogleAuthProvider();

export const MyProvider = ({ children }) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = ()=> {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const idToken = await currentUser.getIdToken();

                // ✅ Send token to backend to generate cookie
                await axios.post('http://localhost:3000/jwt', 
                    { idToken }, 
                    { withCredentials: true }
                );
            } else {
                // ✅ Optional: handle logout, clear cookie if needed
                await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
            }

            
        });

        return () => unSubscribe();
    }, []);


    return (
        <MyContext.Provider value={{ createUser, signInUser,googleSignIn, user, signOutUser, loading}}>
            {children}
        </MyContext.Provider>
    );
};
