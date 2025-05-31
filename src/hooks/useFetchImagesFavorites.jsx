"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useFetchImagesFavorites = (user_id) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user_id) return;

        const fetchFavorites = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/images/favorites/users`, { params: { user_id } });
                setImages(res.data);
                setLoading(false);
            } catch (err) {
                setError("Error al obtener favoritos");
                console.error(err);
                setLoading(false);
            }

        };

        fetchFavorites();
    }, [user_id]);

    return {
        images,
        loading,
        error,
    };
};