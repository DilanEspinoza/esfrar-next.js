"use client"

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import useFetchSingleImage from "@/hooks/useFetchSingleImage";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AsideImageInfo } from "./_components/AsideImageInfo/AsideImageInfo";
import { useFetchUserById } from "@/hooks/useFindUserById";
import { useAsync } from "@/hooks/useAsync";
import { useState } from "react";
import { useFetchAndLoad } from "@/hooks/useFetchAndLoad";
import { getImageById } from "@/services/public.services";


export default function ImagePage() {

    const params = useParams()
    const { image_id } = params
    const [image, setImage] = useState()
    const { loading, callEndPoint } = useFetchAndLoad()

    // const { data, error, loading } = useFetchSingleImage(image_id)

    const user_id = image?.userId;
    const { userFound, errorUserFound } = useFetchUserById(user_id)
    const userId = userFound?.id;


    const getApiData = async () => await callEndPoint(getImageById(image_id))

    const adaptImage = (data) => setImage(data)

    useAsync(getApiData, adaptImage, () => { }, [])

    console.log(image)

    return (
        <>
            <Header />
            {
                loading ? <div className="h-screen flex items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                </div> : <main className='my-20 w-11/12 mx-auto flex flex-col lg:flex-row justify-evenly lg:justify-around items-center gap-10 flex-wrap'>
                    <div className='w-[60%] h-[500px]'>

                        <Image
                            src={image?.file_path}
                            alt={image?.title}
                            width={400}
                            height={400}
                            className="rounded-2xl w-full h-full lg:object-contain object-cover"
                        />



                    </div>
                    <AsideImageInfo user_id={userId}
                        user_name={userFound?.first_name}
                        last_name={userFound?.last_name}
                        image_id={image_id}
                        image_url={image?.file_path}
                        image_title={image?.title} />

                </main>
            }


            {/* {loading ? (
                <div className="bg-neutral-50 w-full h-full flex justify-center items-center">
                    <span>Cargando...</span>
                </div>
            ) :
                data ? (
                    <main className='my-20 w-11/12 mx-auto flex flex-col lg:flex-row justify-evenly lg:justify-around items-center gap-10 flex-wrap'>
                        <div className='w-[60%] h-[500px]'>

                            {loading ? <div className="bg-neutral-50 w-full h-full flex justify-center items-center">
                                <span>Cargando...</span> 
                            </div> : data && data ? (
                                <Image
                                    src={data.file_path}
                                    alt={data.title}
                                    width={400}
                                    height={400}
                                    className="rounded-2xl w-full h-full lg:object-contain object-cover"
                                />
                            ) : (
                                <div className="bg-neutral-200 p-2.5"></div>
                            )}

                        </div>

                        <AsideImageInfo user_id={userId} user_name={userFound.first_name} last_name={userFound.last_name} image_id={image_id} image_url={data.url} image_title={data.title} />

                    </main>
                ) : (
                    <div className="bg-neutral-200 p-2.5">No hay imagen disponible</div>
                )} */}
            <Footer />
        </>
    )

}
