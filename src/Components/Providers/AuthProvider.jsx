import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const setNameAndPhoto = (name, photoUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl 
        });
    }

    const logIn = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            unSubscribe();
        }
    } ,[])

    const authInfo = {
        user,
        loading,
        createUser,
        setNameAndPhoto,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}