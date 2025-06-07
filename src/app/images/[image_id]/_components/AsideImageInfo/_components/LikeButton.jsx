import { HeartIcon } from "@/components/icons/HeartIcon";
import { useLike } from "@/hooks/useLike";
import { Bounce, toast } from "react-toastify";

export const LikeButton = ({ image_id }) => {

    const {
        hasLiked,
        likesCount,
        loading: likeLoading,
        error: likeError,
        toggleLike,
        isAuthenticated,
    } = useLike(image_id);


    const handleClick = () => {
        if (!isAuthenticated) {
            toast.warn(`Debes iniciar sesión para dar like`, {
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
        toggleLike();
    };

    return (
        <button
            className="cursor-pointer border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl"
            title={hasLiked ? "No me gusta" : "Me gusta"}
            onClick={handleClick}
            disabled={likeLoading}
        >
            {hasLiked ? <HeartIcon className="text-red-500" fill="red" /> : <HeartIcon />}
        </button>)
}