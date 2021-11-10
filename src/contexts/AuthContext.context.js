import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password, username) {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            return updateProfile(auth.currentUser, {
                displayName: username
            })
        }).catch(error => {
            console.error(error);
        }) 
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged( async user => {
            try {
                setCurrentUser(user);
                setLoading(false);
            } catch(error) {
              console.error(`Error my dude: ${error}`)  
            }
        })
    
        return unsubscribe;
      }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
