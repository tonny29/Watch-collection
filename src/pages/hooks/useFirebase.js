import { useState,useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";



initializeFirebase();

const useFirebase = () => {
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('');

    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();

    const registerUser=(email,password,name,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setAuthError('');
            const newUser={email,displayName:name};
            setUser(newUser);
            updateProfile(auth.currentUser,{
                displayName:name
            }).then(()=>{
            }).catch((error)=>{
            });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=>setIsLoading(false));
        
    }

    const loginUser=(email,password,location,history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination=location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }

    const signInWithGoogle=(location,history)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }


    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return()=>unsubscribe;
    },[])

    const logOut=()=>{
        signOut(auth).then(()=>{

        }).catch((error)=>{

        })
        .finally(()=>setIsLoading(false));
    }


    return{
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
    }
}

export default useFirebase;