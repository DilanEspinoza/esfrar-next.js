/* export const ButtonsAsideImageInfo = () => {
    const {
        hasLiked,
        likesCount,
        toggleLike,
        loading: likeLoading,
    } = useLike({ imageId: image_id, userId: user_id });



    const { isFavorited, toggleFavorite, loadingFavorite } = useFavorite({ imageId: image_id, userId: user_id });
}

return (
    <div className='flex gap-2'>
        <button
            onClick={toggleLike}
            className="border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl"
            title={hasLiked ? "Quitar like" : "Dar like"}
            disabled={likeLoading}
        >
            <HeartIcon fill={hasLiked ? "red" : "none"} stroke={hasLiked ? "red" : "black"} />
        </button>
        <button
            onClick={toggleFavorite}
            className="border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl"
            title={isFavorited ? "Quitar de favoritos" : "Agregar a favoritos"}
            disabled={loadingFavorite}
        >
            <BookmarkIcon
                fill={isFavorited ? "#e6b800" : "none"}
                stroke={isFavorited ? "#e6b800" : "black"}
                className=""
            />
        </button>

        <button
            className='border border-neutral-300 hover:border-neutral-600 py-2 p-2 rounded-xl'
            title='share'>
            <ShareIcon />
        </button>
    </div>
)
} */