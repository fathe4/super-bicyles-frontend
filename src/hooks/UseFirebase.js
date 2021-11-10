import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialization from "../Firebase/Firebase.init";


FirebaseInitialization()

const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()

    // REGISTER WITH EMAIL AND PASSWORD
    const RegisterUser = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // // Signed in 
                // const user = userCredential.user;
                // // ...
                setError('')
                // const newUser = { email, displayName: name }
                // setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }
    // SIGN IN WITH USER AND EMAIL
    const signIn = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // setUser(user)
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }
    // OBSERVE A USER
    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                // const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
            return () => unsubscribed;

        });

    }, [auth])

    // LOGOUT
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        RegisterUser,
        logout,
        signIn,
        isLoading,
        user,
        error


    }
};

export default UseFirebase;