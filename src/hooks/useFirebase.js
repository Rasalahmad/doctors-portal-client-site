import initializeFirebase from "../Pages/Login/firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";


// initialize firebase
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name}
                setUser(newUser);
                // save user to database 
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                  
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false))

    }
    // register user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setAuthError('');
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = result.user;
                setAuthError('');
                // save to database
                saveUser(user.email, user.displayName, 'PUT')
            }).catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));

    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken)
                })
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [auth]);

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName}
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    useEffect( () => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [user.email])

    return {
        user,
        isLoading,
        admin,
        token,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logOut
    }
}

export default useFirebase;