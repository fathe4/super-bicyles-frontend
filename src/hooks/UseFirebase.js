import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialization from "../Firebase/Firebase.init";


FirebaseInitialization()

const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()

    // REGISTER WITH EMAIL AND PASSWORD
    const RegisterUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email, displayName: name };
                setUser(newUser);

                addUserToDB(email, name)
                setError('')

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(() => setIsLoading(false));
    }

    // CHECK ADMIN 
    useEffect(() => {
        // fetch(`https://polar-savannah-40370.herokuapp.com/users/admin@admin.com`)
        fetch(`https://polar-savannah-40370.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => { setAdmin(data.admin); })

    }, [user.email])

    console.log('tt', user, admin);

    // SIGN IN WITH USER AND EMAIL
    const signIn = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // setUser(user)
                addUserToDB(user.email, user.displayName,);
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

    // ADD USER TO DATABASE
    const addUserToDB = (email, name) => {

        const user = { name, email, roll: 'user' }

        fetch('https://polar-savannah-40370.herokuapp.com/addUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }


    console.log(admin);

    return {
        RegisterUser,
        logout,
        signIn,
        isLoading,
        setIsLoading,
        user,
        error


    }
};

export default UseFirebase;