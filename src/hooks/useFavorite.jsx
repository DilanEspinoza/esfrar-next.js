"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useFavorite = ({ imageId, userId }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [loadingFavorite, setLoadingFavorite] = useState(true);
  const [error, setError] = useState(null);

  // Obtener estado inicial de favorito
  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (!userId) return;

      try {
        const res = await axios.get(`${API_URL}/api/images/${imageId}/favorites/check?user_id=${userId}`);
        setIsFavorited(res.data?.isFavorited || false);
      } catch (err) {
        setError("Error al verificar favoritos");
        console.error(err);
      } finally {
        setLoadingFavorite(false);
      }
    };

    fetchFavoriteStatus();
  }, [imageId, userId]);

  // Alternar favorito
  const toggleFavorite = async () => {
    if (!userId) {
      toast.warn('Debes iniciar sesión para añadir a favoritos.', {
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
      return;
    }

    try {
      if (!isFavorited) {
        await axios.post(`${API_URL}/api/images/${imageId}/favorite`, { user_id: userId });
        setIsFavorited(true);

      } else {
        await axios.delete(`${API_URL}/api/images/${imageId}/favorite`, {
          data: { user_id: userId },
        });
        setIsFavorited(false);
      }
    } catch (err) {
      if (err.response?.status === 409) {
        setIsFavorited(true); // Ya estaba, asumimos true
      } else {
        setError("Error al actualizar favoritos");
        console.error(err);
      }
    }
  };

  return {
    isFavorited,
    loadingFavorite,
    error,
    toggleFavorite,
  };
};
