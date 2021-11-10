import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import '../firebase';


export default function useFirebase(){
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    //Firebase Auth
    const auth = getAuth()

    //Sign In Google 
    const signInUsingGoogle = (location, history) =>{
        const googleProvider = new GoogleAuthProvider();

        //loading true
        setIsLoading(true);
        
        signInWithPopup(auth, googleProvider)
        .then(result =>{

            //update user state
            setUser(result.user)

            //update error state
            setAuthError('');

            //user redirect
            const destination = location.state?.from || '/';
            history.replace(destination)

        }).catch(error =>{
            
            //set Error message
            setAuthError(error.message)
            
        }).finally(() => setIsLoading(false));

    }
    
    //register email and password
    const register = (email, password, name, history, location) =>{
        //Loading true
        setIsLoading(true);


        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
            setAuthError('');
            const newUser = {email, displayName: name};

            setUser(newUser);

            //update profile user
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(()=>{})
            .catch(error => setAuthError(error.message))

            //user redirect
            const destination = location.state?.from || '/';
            history.replace(destination)
        })
        .catch(error =>{
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false));
    }


    //Email and password login user
    const loginUser = (email, password, history, location) =>{
        
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //observe the user 
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
            setIsLoading(false);
        })

        return () => unsubscribed;
    }, [auth])

    //log out user
    const logOut = () =>{

        setIsLoading(true);

        signOut(auth).then(result =>{
            setUser({})
        }).finally(() => setIsLoading(false));
    }

    return{
        user,
        register,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInUsingGoogle
    }
}