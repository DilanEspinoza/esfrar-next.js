"use client";

import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const ImagesSearchContext = createContext();


// Crear el proveedor del contexto
export const ImagesSearchProvider = ({ children }) => {
    const [searchImages, setSearchImages] = useState(null);

    return (
        <ImagesSearchContext.Provider value={{ searchImages, setSearchImages }}>
            {children}
        </ImagesSearchContext.Provider>
    );
};

// Custom hook para acceder al contexto
export { ImagesSearchContext }