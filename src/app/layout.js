"use client"; // Esto indica que este archivo es un componente de cliente

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import SplashScreen from "../components/SplashScreen/SplashScreen"; // Asegúrate de tener el componente
import "./globals.css";
import { UserProvider } from "@/context/UserContext"; // Si tienes contexto de usuario
import { metadata } from "./metadata"; // Aquí importas el metadata
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-poppins",
});

export default function RootLayout({ children }) {
	const [showSplash, setShowSplash] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);
	const [appReady, setAppReady] = useState(false);

	useEffect(() => {
		const visited = localStorage.getItem("visited");

		if (!visited) {
			localStorage.setItem("visited", "true");
			setShowSplash(true);

			const splashTimer = setTimeout(() => {
				setFadeOut(true); // Inicia el fade-out
				setTimeout(() => {
					setShowSplash(false);
					setAppReady(true); // Carga la app después del fade-out
				}, 700); // Tiempo de fade-out
			}, 2500); // Tiempo que el splash estará visible

			return () => clearTimeout(splashTimer); // Limpiar el timer cuando el componente se desmonte
		} else {
			setAppReady(true); // Si ya visitó la app, la carga inmediatamente
		}
	}, []);

	return (
		<html lang='es'>
			<head>
				<meta name='description' content={metadata.description} />
				<title>{metadata.title}</title>
				{/* Aquí puedes agregar más meta tags u otros elementos necesarios */}
			</head>
			<body className={`${poppins.variable} antialiased`}>
				<UserProvider>
					{showSplash && <SplashScreen isVisible={!fadeOut} />}
					{appReady && children}{" "}
					{/* Carga el contenido de la app solo después de la animación */}
					<ToastContainer
						position='bottom-right'
						autoClose={4000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='light'
					/>
				</UserProvider>
			</body>
		</html>
	);
}
