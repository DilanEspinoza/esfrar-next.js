import { loadAbort } from "@/utils/load-abort-axios.utils";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllImages = () => {
	const controller = loadAbort();
	return {
		call: axios.get(`${API_URL}/api/images`, { signal: controller.signal }),
		controller,
	};
};

export const getImageById = (image_id) => {
	const controller = loadAbort();
	return {
		call: axios.get(`${API_URL}/api/images/${image_id}`, {
			signal: controller.signal,
		}),
		controller,
	};
};

export const getImagesSeaarch = (search) => {
	const controller = loadAbort();
	return {
		call: axios.get(
			`${API_URL}/api/images/search?search=${search}&page=$1&limit=15`,
			{ signal: controller.signal }
		),
		controller,
	};
};

export const getUserById = (user_id) => {
	const controller = loadAbort();
	return {
		call: axios.get(`${API_URL}/api/images/${user_id}`, {
			signal: controller.signal,
		}),
		controller,
	};
};

// Private rutes
export const getlImageByUser = (user_id) => {
	const controller = loadAbort();
	return {
		call: axios.get(`${API_URL}/api/images/${user_id}`, {
			signal: controller.signal,
		}),
		controller,
	};
};
