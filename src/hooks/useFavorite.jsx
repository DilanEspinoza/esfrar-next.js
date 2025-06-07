import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "@/context/AuthContext";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useFavorite = (image_id) => {
  const [hasFavorited, setHasFavorited] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token, isAuthenticated } = useAuth();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (!image_id) return

      setLoading(true);
      setHasFavorited(false)
      setError(null);

      try {
        if (isAuthenticated && token) {
          const res = await axios.get(
            `${API_URL}/api/images/${image_id}/favorite/check`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log(res.data)
          setHasFavorited(res.data.hasFavorite);
        } else {
          setHasFavorited(false);
        }
      } catch (err) {
        console.error("Error al cargar favoritos:", err);
        setError("Error al cargar favoritos");
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteStatus();
  }, [image_id, token, isAuthenticated, user?.id]);

  const toggleFavorite = async () => {
    if (!isAuthenticated || !token) {
      setError("Debes iniciar sesión para marcar como favorito");
      /*  toast.warn("Debes iniciar sesión para agregar a favoritos", {
         position: "bottom-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: false,
         draggable: false,
         progress: undefined,
         theme: "light",
         transition: Bounce,
       }); */
      return;
    }

    try {
      if (!hasFavorited) {
        await axios.post(
          `${API_URL}/api/images/${image_id}/favorite`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setHasFavorited(true);
        toast.success("¡Haz añadido la imagen a favoritos exitosamente!", {
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
          headers: { Authorization: `Bearer ${token}` },
        });
        setHasFavorited(false);
      }
    } catch (err) {
      setError("Error al cambiar favorito");
      console.error("Error al cambiar favorito:", err);

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
