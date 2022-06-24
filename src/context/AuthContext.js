import { createContext, useContext, useEffect, useState} from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext()

export function AuthContextProvider({children}){
    const [user, setUser] = useState({});

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return <AuthContext.Provider value={{signUp}} >{children}</AuthContext.Provider>
}

export function UserAuth(){
    return useContext(AuthContext)
}