"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetchSingleImage(image_id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getASingleImage = async () => {
            setLoading(true);
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/api/images/${image_id}`;
                const res = await axios.get(url);
                setData(res.data);
                setLoading(false);
            } catch (error) {
                setError("Hubo un error al traer la imagen");
                setLoading(false);
            }
        };

        if (image_id) {
            getASingleImage();
        }
    }, [image_id]);

    return { data, error, loading };
}
