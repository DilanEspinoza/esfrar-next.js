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
	title: "Esfrar | Contributing",
	description: "Una galeria de imagenes",
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
