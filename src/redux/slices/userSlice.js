import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			localStorage.setItem("user", JSON.stringify(action.payload));
		},
		logout: (state) => {
			state.user = null;
			localStorage.removeItem("user");
		},
		loadUserFromStorage: (state) => {
			const storedUser = localStorage.getItem("user");
			if (storedUser) {
				state.user = JSON.parse(storedUser);
			}
		},
	},
});

export const { setUser, logout, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
