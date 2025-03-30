import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Link from "next/link";

export default function NotFound() {
	return (
		<>
			<Header />
			<div className="h-screen flex flex-col justify-center items-center gap-4">
				<div className="absolute top-0 -z-10 h-full w-full bg-white">
					<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(34,197,94,0.5)] opacity-50 blur-[80px]"></div>
				</div>

				<p className=" font-bold">404</p>
				<h2 className="font-bold text-5xl">Page not found</h2>

				<p className="text-neutral-600">Sorry, we couldn’t find the page you’re looking for.</p>
				<Link className="font-bold" href='/'>← Back to home</Link>
			</div>
			<Footer />
		</>
	);
}
