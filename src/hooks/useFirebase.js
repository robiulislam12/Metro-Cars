import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import '../firebase';


export default function useFirebase(){
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
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
        logOut,
        isLoading,
        authError,
        signInUsingGoogle
    }
}