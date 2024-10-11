import { createContext, useState } from "react";

export const AuthContext = createContext({});
const AuthContextProvider = ({children}) => {
    const fromLocal = JSON.parse(localStorage.getItem("userDetails"));

    const [userInfo, setUserInfo] = useState(fromLocal ? fromLocal : null);
    return (
        <AuthContext.Provider
            value={{ userInfo, setUserInfo }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;