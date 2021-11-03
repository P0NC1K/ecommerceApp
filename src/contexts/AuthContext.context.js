import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
            return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged( async user => {
            try {
                setCurrentUser(user);
                setLoading(false);
            } catch(error) {
              error.log(`Error my dude: ${error}`)  
            }
        })
    
        return unsubscribe;
      }, [])

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
