'use client'

import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext'; 
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { updateProfile } from 'firebase/auth';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    // Sign up/register user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Sign in with email/pass
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                const signedInUser = result.user;
                setUser({
                    ...signedInUser,
                    photoURL: signedInUser.photoURL || "https://i.postimg.cc/W3YZkWYg/default-avatar.png",
                });
                setLoading(false);
                return result; 
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                 
            });
    }

    // Update user profile
    const updateUser = async (profile) => {
        if (!auth.currentUser) return;
        await updateProfile(auth.currentUser, profile);
        setUser({ ...auth.currentUser })
    };

    // Reset password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // Auth State Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    ...currentUser,
                    photoURL: currentUser.photoURL || "https://i.postimg.cc/W3YZkWYg/default-avatar.png",
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);


    const authInfo = {
        createUser,
        signInUser,
        logOut,
        signInWithGoogle,
        resetPassword,
        user,
        setUser,
        updateUser,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;