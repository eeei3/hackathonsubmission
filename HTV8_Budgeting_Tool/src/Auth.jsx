import React, { useEffect, useState} from "react";
import firebaseConfig from './firebase-config'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChange(setCurrentUser);
        },
        []);

        return (
            <AuthContext.Provider
                value={{currentUser}}>
                    {children}
                </AuthContext.Provider>
        );
};
