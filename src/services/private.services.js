import { loadAbort } from "@/utils/load-abort-axios.utils";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getImagesLikesByUser = (user_id) => {
	const token = localStorage.getItem("token");
	console.log("User ID:", user_id);
	console.log("Token:", token); // 👈 Añadir esto

	const controller = loadAbort();

	return {
		call: axios.get(`${API_URL}/api/images/user/${user_id}/likes`, {
			headers: { Authorization: `Bearer ${token}` },
			signal: controller.signal,
		}),
		controller,
	};
};
