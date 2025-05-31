"use client"

import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchUserById = (id) => {

    const [userFound, setUserFound] = useState([])
    const [errorUserFound, setErrorUserFound] = useState(null)

    useEffect(() => {
        if (!id) return;
        const fetchUser = async () => {

            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`)
                setUserFound(res.data.user)
            } catch (error) {
                console.log("Hubo un error al buscar el usuario")
                setErrorUserFound("Hubo un error al buscar el usuario")
            }
        }
        fetchUser()
    }, [id])


    return {
        userFound, errorUserFound
    }
}