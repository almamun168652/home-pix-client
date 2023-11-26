import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { app } from "../Firebase/firebase.config";
import useAxiosOpen from "../hooks/useAxiosOpen";


const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosOpen = useAxiosOpen();
    
    const googleProvider = new GoogleAuthProvider();


    // social login
    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        console.log(name, photo);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }


    // on auth state change
    useEffect(() => {
        const unscubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = {
                    email: currentUser.email
                }
                axiosOpen.post('/jwt' , userInfo)
                .then(res => {
                    if(res.data?.token){
                        localStorage.setItem('access-token' , res.data.token)
                    }  
                })

            }else{
                // TO DO: remove token (it token stored in the client side)
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            unscubscribe();
        };
    }, [axiosOpen]);

    const authInfo = {
        user,
        loading,
        logInWithGoogle,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProviders.propTypes = {
    children: PropTypes.node
}

export default AuthProviders;