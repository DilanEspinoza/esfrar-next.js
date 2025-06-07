// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = useSelector((state) => state.user?.user); // Asegúrate que este es el path correcto
    const [token, setToken] = useState(null);

    useEffect(() => {
        const newToken = user?.token;
        setToken(newToken ?? null);
    }, [user]);

    const login = (newToken) => setToken(newToken);
    const logout = () => setToken(null);

    const isAuthenticated = !!token;



    return (
        <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
