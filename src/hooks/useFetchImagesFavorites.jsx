"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "@/context/AuthContext";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useFavorite = (image_id) => {
    const [hasFavorited, setFavorite] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { token, isAuthenticated } = useAuth();
    const user = useSelector((state) => state.user.user);


    useEffect(() => {

        const fetchFavoriteStatus = async () => {
            if (!image_id) return;

            setLoading(true);
            setError(null);
            setFavorite(false);

            try {
                if (isAuthenticated && token) {
                    const res = await axios.get(
                        `${API_URL}/api/images/${image_id}/favorites/check`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    console.log(res.data)
                    setFavorite(res.data.fa);
                } else {
                    setFavorite(false); // si no está autenticado, no puede haber dado like
                }

            } catch (err) {
                setError("Error al cargar datos de favoritos");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };


        fetchFavoriteStatus();

        // 🔁 se ejecuta cada vez que cambia el token, image_id o el usuario logueado
    }, [image_id, token, isAuthenticated, user?.id]);

    const toggleFavorite = async () => {
        if (!isAuthenticated || !token) {
            setError("Debes estar logueado para añadir a favoritos");
            return;
        }

        try {
            if (!hasFavorited) {
                await axios.post(
                    `${API_URL}/api/images/${image_id}/favorite`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setHasLiked(true);
                toast.success(`¡Haz añadido a favoritos exitosamente!`, {
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
                await axios.delete(`${API_URL}/api/images/${image_id}/favorite`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setFavorite(false);

            }
        } catch (err) {
            setError("Error al cambiar like");
            console.error(err);
        }
    };

    return {
        hasFavorited,
        loading,
        error,
        toggleFavorite,
        isAuthenticated,
    };
};
