import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	images: [], // Todas las imágenes
	likedImages: [], // Imágenes que el usuario ha dado like
	favoriteImages: [], // Imágenes añadidas a favoritos
};

const imagesSlice = createSlice({
	name: "images",
	initialState,
	reducers: {
		// Almacena la lista completa de imágenes
		setImages: (state, action) => {
			state.images = action.payload;
		},

		// Añade una imagen (nueva publicación, por ejemplo)
		addImage: (state, action) => {
			state.images.push(action.payload);
		},

		// Elimina una imagen por ID
		removeImage: (state, action) => {
			state.images = state.images.filter((img) => img.id !== action.payload);
			state.likedImages = state.likedImages.filter(
				(id) => id !== action.payload
			);
			state.favoriteImages = state.favoriteImages.filter(
				(id) => id !== action.payload
			);
		},

		// Marcar o desmarcar "like"
		toggleLikeImage: (state, action) => {
			const imageId = action.payload;
			if (state.likedImages.includes(imageId)) {
				state.likedImages = state.likedImages.filter((id) => id !== imageId);
			} else {
				state.likedImages.push(imageId);
			}
		},

		// Marcar o desmarcar "favorito"
		toggleFavoriteImage: (state, action) => {
			const imageId = action.payload;
			if (state.favoriteImages.includes(imageId)) {
				state.favoriteImages = state.favoriteImages.filter(
					(id) => id !== imageId
				);
			} else {
				state.favoriteImages.push(imageId);
			}
		},

		// Limpiar todo
		clearImages: (state) => {
			state.images = [];
			state.likedImages = [];
			state.favoriteImages = [];
		},
	},
});

export const {
	setImages,
	addImage,
	removeImage,
	toggleLikeImage,
	toggleFavoriteImage,
	clearImages,
} = imagesSlice.actions;

export default imagesSlice.reducer;
