import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import '../firebase';


export default function useFirebase(){
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

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

            //Save to database
            saveUserGoogleLogin(result.user.displayName, result.user.email)

            //user redirect
            const destination = location.state?.from || '/';
            history.replace(destination)

        }).catch(error =>{
            
            //set Error message
            setAuthError(error.message)
            
        }).finally(() => setIsLoading(false));

    }
    
    //register email and password
    const register = (email, password, name, phone, history, location) =>{
        //Loading true
        setIsLoading(true);


        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
            setAuthError('');
            const newUser = {email, displayName: name};

            setUser(newUser);

            //Save user on database
            saveUser(email, name, phone)

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

    //Check admin
    useEffect(()=>{
       const url = `https://metro-car.herokuapp.com/user/${user?.email}`;
        axios.get(url)
        .then(res =>{
            setAdmin(res.data?.admin)
        })
    }, [user?.email])

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
 
    //Save user by email and password 
    const saveUser = ( email, displayName , phoneNumber) =>{
        const user = {email, displayName, phoneNumber }

        axios.post('https://metro-car.herokuapp.com/user', user)
        .then(res =>{
            console.log(res.data)
        })

    }

    //Save user by google login
    const saveUserGoogleLogin = (name, email) =>{
        const user ={name, email};
        axios.put('https://metro-car.herokuapp.com/user', user)
        .then(res =>{
            // console.log(res.data)
        })
    }

    return{
        user,
        register,
        admin,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInUsingGoogle
    }
}