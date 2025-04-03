"use client"

import axios from "axios"
import { useEffect, useState } from "react"



export const useFetchSingleImage = (image_id) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getASingleImage = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/images/${image_id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                setData(res.data)
                setLoading(false)
            } catch (error) {
                setError("Hubo un error al traer la imagene")
                setLoading(false)
            }
        }

        getASingleImage()
    }, [image_id])

    return { data, error, loading }

}