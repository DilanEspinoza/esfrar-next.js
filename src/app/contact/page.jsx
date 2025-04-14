import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

export default function Contact() {
    return (
        <>
            <Header />
            <main className="flex flex-col mt-20  items-start mx-40 gap-20">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#86efac,transparent)]"></div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Our offices</h1>
                    We have offices in multiple cities around the world to serve our clients better. You can reach us at any of the following locations.
                </div>
                <div className="flex flex-col  ">

                    <div className="flex gap-4 items-center">
                        <hr className="border h-10 border-indigo-500" />
                        <p>Quito, Ecudor</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <hr className="border h-10 border-black" />
                        <p>Av. y Santa Teresa</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <hr className="border h-10 border-black" />
                        <p>Pomasqui</p>
                    </div>
                </div>

                <section className="w-[100%] h-[50vh] flex gap-10  p-3">
                    <div className="w-[50%] ">
                        <h2 className="text-2xl font-bold">Get in touch</h2>
                        <div className="w-[80%]">

                            <p>Contact any of our teams through their email address or the provided phone number.</p>
                        </div>
                    </div>

                    <div>

                    </div>
                    <div className="flex flex-wrap gap-5">
                        <div className="w-80 h-40 p-6 bg-neutral-800 text-white rounded-xl flex flex-col gap-3">
                            <p className="">Atención al cliente</p>
                            <a href="" className="text-green-500">support@esfrar.com</a>
                            <hr className="w-1" />
                        </div>
                        <div className="w-80 h-40 p-6 bg-neutral-800 text-white rounded-xl flex flex-col gap-3">
                            <p className="">Press</p>
                            <a href="" className="text-green-500">press@esfrar.com</a>
                            <hr className="w-1" />
                        </div>
                        <div className="w-80 h-40 p-6 bg-neutral-800 text-white rounded-xl flex flex-col gap-3">
                            <p className="">Únete a nuestro equipo</p>
                            <a href="" className="text-green-500">careers@esfrar.com</a>
                            <hr className="w-1" />
                        </div>
                        <div className="w-80 h-40 p-6 bg-neutral-800 text-white rounded-xl flex flex-col gap-3">
                            <p className="">
                                Saluda</p>
                            <a href="" className="text-green-500">mail@esfar.com</a>
                            <hr className="w-1" />
                        </div>


                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}