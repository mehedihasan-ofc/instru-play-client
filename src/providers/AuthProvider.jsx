import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    // create user => email and password
    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user => email and password
    const signIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login => popup
    const signInWithGoogle = (provider) => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // user log out
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth)
    }

    // observe auth state change
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('auth state change', currentUser);
            setUser(currentUser);

            // get and set token
            if (currentUser) {
                axios.post('https://instru-play-server-mehedihasan-ofc.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token);
                        setIsLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        });

        return () => {
            unsubscribe();
        }

    }, [reload]);

    const updateUserData = (user, name, photoUrl) => {

        setIsLoading(true);
        return updateProfile(user, {
            displayName: name, photoURL: photoUrl
        })
    };

    const authInfo = {
        user,
        isLoading,
        createUser,
        signIn,
        signInWithGoogle,
        setReload,
        updateUserData,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;