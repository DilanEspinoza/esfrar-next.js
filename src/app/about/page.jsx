// import AnimatedMeshGradient from "@/components/AnimatedMeshGradient/AnimatedMeshGradient";
// "use-cliente"
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Image from "next/image";


const imagesIntegrants = [
    { id: 1, src: "/dilan-espinoza.jpg", name: "Dilan Espinoza" },
    { id: 2, src: "/dereck-arteaga.jpeg", name: "Dereck Arteaga" },
    { id: 3, src: "/daniela-rodriguez.jpeg", name: "Daniela Rodrigez" },
    { id: 4, src: "/fernando-olivo.jpeg", name: "Fernando Olivo" },
    { id: 5, src: "/dilan-salcedo.jpeg", name: "Dilan Salcedo" },]

export default function About() {
    return (
        <>
            <Header />
            {/* <AnimatedMeshGradient /> */}

            <main className=" max-w-7xl mx-auto flex flex-col mt-20  items-center lg:items-start  gap-20">




                <div className="relative w-full bg-white overflow-hidden">
                    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                            <div className="sm:max-w-lg">
                                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                    Portafolio digital online
                                </h1>
                                <p className="mt-4 text-xl text-gray-500">
                                    Esta galería ha sido creada para diseñadores, desarrolladores y para todo tipo de personas brindandoles acceso a una colección gratuita de imágenes que podran ser utilizadas sin restricción alguna.
                                </p>
                            </div>
                            <div>
                                <div className="mt-10">
                                    {/* Decorative image grid */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                                    >
                                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                            <div className="flex items-center space-x-6 lg:space-x-8">
                                                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                        <img
                                                            src="image-about-1.jpg"
                                                            alt=""
                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>
                                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                        <img
                                                            src="image-about-2.jpg"
                                                            alt=""
                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                        <img
                                                            src="image-about-3.jpg"
                                                            alt=""
                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>
                                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                        <img
                                                            src="/logo-colegio.jpg"
                                                            alt=""
                                                            className="w-full h-full  object-center object-contain"
                                                        />
                                                    </div>
                                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                        <img
                                                            src="image-about-4.jpg"
                                                            alt=""
                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                        <img
                                                            src="image-about-5.jpg"
                                                            alt=""
                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>
                                                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                        <img
                                                            src="image-about-6.jpg"
                                                            alt=""
                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="#"
                                        className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                                    >
                                        View Gal
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="flex flex-col gap-5 w-[60%]">

                    <h2 className="text-4xl font-bold">Nuestra misión</h2>
                    <p className="font-medium leading-relaxed text-neutral-600">Nuestro objetivo es ofrecer una plataforma fácil de usar, con recursos visuales variados y de alta resolución, que ayude a dar vida a tus ideas de manera sencilla y efectiva.</p>

                    <p className="font-medium leading-relaxed text-neutral-600">Sabemos lo difícil que puede ser encontrar imágenes de alta calidad y libres de derechos para tus proyectos.</p>

                    <p className="font-medium leading-relaxed text-neutral-600">Esfrar no es solo una plataforma, es una fuerza pionera tanto en el mundo digital como en el físico. Nuestro compromiso va más allá de crear una galeria: se trata de construir puentes entre creadores, desarrolladores y usuarios, facilitando una nueva forma de conectarse enriquecida con oportunidades, empoderamiento y participación. A través de aplicaciones innovadoras de la tecnología web, estamos estableciendo nuevos puntos de referencia para la propiedad digital, la creatividad y la gobernanza impulsada por la comunidad.</p>

                    <p className="font-medium leading-relaxed text-neutral-600">A medida que avanzamos en este ambicioso viaje, nuestra misión es servir como centro de innovación tecnológica, colaboración comunitaria y enriquecimiento educativo. Visualizamos a Esfrar como la piedra angular de un ecosistema vibrante donde se aproveche al máximo el potencial sin explotar de la cadena de bloques, marcando el comienzo de una nueva era de interacción digital que sea asequible, inclusiva y de profundo impacto.</p>
                </section>

                <section className=" text-center lg:text-start flex flex-col items-center lg:items-start mx-auto lg:mx-0 m-3" id="team">
                    <h2 className="text-4xl font-bold">Nuestro equipo</h2>
                    <p className="font-medium leading-relaxed text-neutral-600">
                        Conozca a los miembros de nuestro equipo.</p>
                    <div className="flex gap-10 lg:gap-20 justify-center m-4 flex-wrap ">

                        {
                            imagesIntegrants.map((integran) => (
                                <div key={integran.id} className="flex flex-col items-center justify-center gap-1">
                                    <Image
                                        src={integran.src}
                                        width={100}
                                        height={100}
                                        unoptimized
                                        alt={integran.name}
                                        className="rounded-full object-cover"
                                    />
                                    <h4 className="font-semibold">{integran.name}</h4>
                                </div>
                            ))
                        }
                    </div>

                </section>

            </main >
            <Footer />
        </>
    )
}

//

// 