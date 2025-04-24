/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["robohash.org", "localhost"], // Agrega aquí el dominio de donde vienen las imágenes
		remotePatterns: [
			{
				protocol: "https",
				hostname: "backend-esfrar-production.up.railway.app",
				pathname: "/uploads/**",
			},
		],
	},
};

export default nextConfig;
