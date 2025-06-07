import { BookmarkIcon } from "@/components/icons/BookmarkIcon";
import { useFavorite } from "@/hooks/useFavorite";
import { Bounce, toast } from "react-toastify";

export const FavoriteButton = ({ image_id }) => {

    const {
        hasFavorited,
        loading,
        toggleFavorite,
        isAuthenticated, // <- esto faltaba
    } = useFavorite(image_id);


    const handleClick = () => {
        if (!isAuthenticated) {
            toast.warn(`Debes iniciar sesión para añadir a favoritos`, {
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
        toggleFavorite();
    };


    return (
        <button
            className="cursor-pointer border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl"
            title={hasFavorited ? "Quitar de favoritos" : "Agregar a favoritos"}
            disabled={loading}
            onClick={handleClick}
        >
            {hasFavorited ? <BookmarkIcon className="text-yellow-500" fill="yellow" /> : <BookmarkIcon />}
        </button>)
}