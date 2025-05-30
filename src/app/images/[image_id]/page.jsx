"use client"

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import useFetchSingleImage from "@/hooks/useFetchSingleImage";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AsideImageInfo } from "./_components/AsideImageInfo/AsideImageInfo";
import { useFetchUserById } from "@/hooks/useFindUserById";


export default function ImagePage() {

    const params = useParams()
    const { image_id } = params

    const { data, error, loading } = useFetchSingleImage(image_id)

    const { user_id } = data
    const { userFound, errorUserFound } = useFetchUserById(user_id)
    const userId = userFound?.id;






    return (
        <>
            <Header />
            <hr className="border border-neutral-100" />
            <main className='my-20 w-11/12 mx-auto flex flex-col lg:flex-row justify-evenly lg:justify-around items-center gap-10 flex-wrap'>
                <div className='w-[60%] h-[500px]'>

                    {loading ? <div className="bg-neutral-50 w-full h-full flex justify-center items-center">
                        <span>Cargando...</span> {/* Puedes poner una animación o un ícono de carga */}
                    </div> : data && data ? (
                        <Image
                            className="rounded-2xl w-full h-full lg:object-contain object-cover"
                            src={data.url}
                            alt={data.title}
                            width={400}
                            height={400}
                        />
                    ) : (
                        <div className="bg-neutral-200 p-2.5"></div>
                    )}

                </div>

                <AsideImageInfo user_id={userId} user_name={userFound.first_name} last_name={userFound.last_name} image_id={image_id} image_url={data.url} image_title={data.url} />

            </main>
            <Footer />
        </>
    )

}
