"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useLike = ({ imageId, userId }) => {
    const [hasLiked, setHasLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Obtener estado inicial
    useEffect(() => {
        const fetchLikeStatus = async () => {
            if (!imageId) return;

            try {
                // Obtener cantidad total de likes
                const resCount = await fetch(`${API_URL}/api/images/${imageId}/likes/count`);
                const countData = await resCount.json();
                setLikesCount(countData.likes);

                // Verificar si el usuario ya dio like
                if (userId) {
                    const resCheck = await fetch(`${API_URL}/api/images/${imageId}/likes/check?user_id=${userId}`);
                    const checkData = await resCheck.json();
                    setHasLiked(checkData.hasLiked);
                }
            } catch (err) {
                setError("Error al cargar datos de like");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchLikeStatus();
    }, [imageId, userId]);

    // Alternar like
    const toggleLike = async () => {
        if (!userId || !imageId) return;

        try {
            if (!hasLiked) {
                await axios.post(`${API_URL}/api/images/${imageId}/like`, { user_id: userId });
                setHasLiked(true);
                setLikesCount((prev) => prev + 1);
            } else {
                await axios.delete(`${API_URL}/api/images/${imageId}/like`, {
                    data: { user_id: userId },
                });
                setHasLiked(false);
                setLikesCount((prev) => prev - 1);
            }
        } catch (err) {
            setError("Error al cambiar like");
            console.error(err);
        }
    };

    return {
        hasLiked,
        likesCount,
        loading,
        error,
        toggleLike,
    };
};
