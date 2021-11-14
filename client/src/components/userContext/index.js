import { createContext } from "react";

export const IsUserLoggedIn = createContext(false);

export const IsUserLoggedInProvider = ({ children }) => {
    const userLoggedIn = document.cookie.includes('isAuthenticated');

    return <IsUserLoggedIn.Provider value={userLoggedIn}>
                {children}
           </IsUserLoggedIn.Provider>
};
