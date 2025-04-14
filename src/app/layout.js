import { UserProvider } from "@/context/UserContext";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-poppins",
});

export const metadata = {
	title: "Esfrar",
	description: "Una galeria de imagenes",
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body className={`${poppins.variable} antialiased`}>
				<ClientWrapper>{children}</ClientWrapper>
			</body>
		</html>
	);
}
