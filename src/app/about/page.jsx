// import AnimatedMeshGradient from "@/components/AnimatedMeshGradient/AnimatedMeshGradient";
// "use-cliente"
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Image from "next/image";
export default function About() {
    return (
        <>
            <Header />
            {/* <AnimatedMeshGradient /> */}
            <main className=" flex flex-col mt-20  items-center lg:items-start lg:mx-40 gap-20">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#86efac,transparent)]"></div>
                </div>

                <section className="w-[50%] h-[80vh]  flex flex-col gap-4 p-2 mt-10">
                    <h1 className="font-bold text-5xl tracking-wide leading-relaxed">La galería gratuita definitiva</h1>
                    <p className="font-medium text-lg tracking-normal leading-loose text-neutral-600"> Esta galería ha sido creada para brindar a diseñadores, desarrolladores y todo tipo de personas brindando acceso a una colección gratuita de imágenes que pueden utilizar sin restricciones. </p>
                    {/*   <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
                </section>

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
                        <div className="flex flex-col items-center justify-center gap-1">
                            <Image
                                src="https://robohash.org/dilan"
                                width={100}
                                height={100}
                                alt="Picture of the author" />
                            <h4 className="font-semibold">Dilan Espinoza</h4>
                            <p className="text-neutral-600">Lider</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <Image
                                src="https://robohash.org/pepelian"
                                width={100}
                                height={100}
                                alt="Picture of the author" />
                            <h4 className="font-semibold">Dilan Espinoza</h4>
                            <p className="text-neutral-600">Lider</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <Image
                                src="https://robohash.org/pepelian"
                                width={100}
                                height={100}
                                alt="Picture of the author" />
                            <h4 className="font-semibold">Dilan Espinoza</h4>
                            <p className="text-neutral-600">Lider</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1">
                            <Image
                                src="https://robohash.org/pepelian"
                                width={100}
                                height={100}
                                alt="Picture of the author" />
                            <h4 className="font-semibold">Dilan Espinoza</h4>
                            <p className="text-neutral-600">Lider</p>
                        </div>
                        {/* <div id="temm"></div> */}
                    </div>

                </section>

            </main >
            <Footer />
        </>
    )
}

//

// 