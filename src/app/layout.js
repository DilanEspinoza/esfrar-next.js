"use client";

// import { Poppins } from "next/font/google";
import { metadata } from "./metadata";
import ClientRoot from "@/components/ClientRoot";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
/* 
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-poppins",
}); */

export default function RootLayout({ children }) {
	const [showSplash, setShowSplash] = useState(false);
	const [fadeOut, setFadeOut] = useState(false);
	const [appReady, setAppReady] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const visited = localStorage.getItem("visited");

		if (!visited) {
			localStorage.setItem("visited", "true");
			setShowSplash(true);

			const splashTimer = setTimeout(() => {
				setFadeOut(true);
				setTimeout(() => {
					setShowSplash(false);
					setAppReady(true);
				}, 700);
			}, 2500);

			return () => clearTimeout(splashTimer);
		} else {
			setAppReady(true);
		}
	}, []);
	return (
		<html lang='es'>
			<head>
				<meta name='description' content={metadata.description} />
				<title>{metadata.title}</title>
			</head>
			<body>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<AuthProvider>
							{showSplash && <SplashScreen isVisible={!fadeOut} />}
							{appReady && children}{" "}
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
						</AuthProvider>
					</PersistGate>
				</Provider>
			</body>
		</html>
	);
}
