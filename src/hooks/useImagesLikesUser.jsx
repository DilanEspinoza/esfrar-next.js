import { useSelector } from "react-redux";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Bounce, toast } from "react-toastify";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useImagesLikesUser = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { token } = useAuth();
    const user = useSelector((state) => state.user.user);


    useEffect(() => {
        if (typeof window === "undefined") return;
        const fetchlikes = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/images/user/${user?.id}/likes`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log(res.data)
                setImages(res.data);
            } catch (err) {
                setError(`${err.response.data.error}`);
            } finally {
                setLoading(false);
            }
        };

        if (user?.id && token) fetchlikes();
    }, [images, user, token]);

    const handleDelete = async (image_id) => {
        try {
            await axios.delete(`${API_URL}/api/images/${image_id}/like`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Imagen eliminada de megusta con éxito", {
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
            // Actualiza la lista localmente
            setImages(prev => prev.filter(img => img.id !== image_id));
        } catch (err) {
            setError("¡Hubo un error al eliminar la imagen!");
        }
    };

    return {
        images,
        loading,
        error,
        handleDelete,
    };
};
