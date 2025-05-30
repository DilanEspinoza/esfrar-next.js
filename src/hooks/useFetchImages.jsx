"use client";

import { useState, useEffect } from "react";
import axios from "axios";


export const useFetchImages = () => {
    const [data, setData] = useState()
    const [error, setError] = useState(null)

    useEffect(() => {

        const getAllImages = async () => {

            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/images`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
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