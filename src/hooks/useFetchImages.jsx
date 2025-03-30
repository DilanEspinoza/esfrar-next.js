"use client";

import { useState, useEffect } from "react";
import axios from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useFetchImages = () => {
    const [data, setData] = useState()
    const [error, setError] = useState(null)

    useEffect(() => {

        const getAllImages = async () => {

            try {
                const res = await axios.get(`${API_URL}/api/images`)
                console.log(res)
                setData(res.data)

            } catch (error) {
                setError("Hubo un error al traer las imagenes")

                console.log(error)
            }

        }

        getAllImages()
    }, [])


    return { data, error }

}