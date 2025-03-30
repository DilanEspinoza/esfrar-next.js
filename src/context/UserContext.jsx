"use client";

import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const UserContext = createContext();

// Crear el proveedor del contexto
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);

    const updateUserId = (id) => {
        setUserId(id);
    };

    return (
        <UserContext.Provider value={{ userId, updateUserId }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook para acceder al contexto
export const useUserContext = () => useContext(UserContext);