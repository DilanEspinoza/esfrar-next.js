import { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Al cargar la app, recupera el usuario del localStorage si existe
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Método para actualizar el usuario
    const updateUser = (newUser) => {
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    };

    // Método para cerrar sesión (opcional)
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <UserContext.Provider value={{ user, updateUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para acceder fácilmente al contexto
export const useUserContext = () => useContext(UserContext);
