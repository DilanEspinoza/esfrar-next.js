import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Login | Register",
	description: "Register of esfrar",
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body>{children}</body>
		</html>
	);
}
