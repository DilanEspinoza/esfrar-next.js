"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "@/context/AuthContext";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useLike = (image_id) => {
    const [hasLiked, setHasLiked] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { token, isAuthenticated } = useAuth();
    const user = useSelector((state) => state.user.user);


    useEffect(() => {

        const fetchLikeStatus = async () => {
            if (!image_id) return;
            setLoading(true);
            setError(null);
            setHasLiked(false);
            // setLikesCount(0);

            try {

                if (isAuthenticated && token) {
                    const res = await axios.get(
                        `${API_URL}/api/images/${image_id}/likes/check`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    setHasLiked(res.data.hasLiked);
                } else {
                    setHasLiked(false);
                }

            } catch (err) {
                setError("Error al cargar datos de likes");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };


        fetchLikeStatus();

        // 🔁 se ejecuta cada vez que cambia el token, image_id o el usuario logueado
    }, [image_id, token, isAuthenticated, user?.id]);

    const toggleLike = async () => {
        if (!isAuthenticated || !token) {
            setError("Debes estar logueado para dar like");
            return;
        }

        try {
            if (!hasLiked) {
                await axios.post(
                    `${API_URL}/api/images/${image_id}/like`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setHasLiked(true);
                toast.success(`¡Haz dado like exitosamente!`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            } else {
                await axios.delete(`${API_URL}/api/images/${image_id}/like`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setHasLiked(false);

            }
        } catch (err) {
            setError("Error al cambiar like");
            console.error(err);
        }
    };

    return {
        hasLiked,
        loading,
        error,
        toggleLike,
        isAuthenticated,
    };
};
