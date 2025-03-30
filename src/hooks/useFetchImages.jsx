"use client";

import { useState, useEffect } from "react";
import axios from "axios";


export const useFetchImages = () => {
    const [data, setData] = useState()
    const [error, setError] = useState(null)

    useEffect(() => {

        const getAllImages = async () => {

            try {
                const res = await axios.get('https://bkd-esfrar-expresjs-production.up.railway.app/api/images')
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