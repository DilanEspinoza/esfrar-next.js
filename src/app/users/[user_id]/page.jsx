"use client"

import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { ImageCard } from "@/components/ImageCard/ImageCard"
import useFetchImagesByUser from "@/hooks/useFetchImagesByUser"
import { useFetchUserById } from "@/hooks/useFindUserById"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
// import Image from "next/image"

export default function UserProfile() {

    const { user_id } = useParams();


    const { userFound, errorUserFound } = useFetchUserById(user_id)



    const username = userFound?.first_name
    const lastname = userFound?.last_name
    const userId = userFound?.id


    const { data, error } = useFetchImagesByUser(userId)
    console.log(data && data)
    console.log(error && error)

    return (
        <>
            <Header />
            <main className=" w-[90%] mx-auto p-5 my-10 h-scree">

                {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}
                <div className="flex flex-col gap-5 ">
                    {/*        <div className="">

                        <Image
                            src={`https://robohash.org/${username}`}
                            width={100}
                            height={100}
                            className="w-[100px] h-[100px] rounded-full"></Image >
                    </div> */}
                    <div className="flex justify-between gap-2 mx-5">
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold">Imagenes subidas por el usuario {username} {lastname}</p>
                            {/*   <div className="flex gap-4">
                                <div className="flex gap-1">
                                    <span>0</span>
                                    <p>Seguidores</p>
                                </div>
                                <div className="flex gap-1">
                                    <span>0</span>
                                    <p>Siguiendo</p>
                                </div>
                            </div> */}
                        </div>
                        {/* 
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-1">
                                <span>0</span>
                                <p>Megusta</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span>0</span>
                                <p>Visitas</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span>0</span>
                                <p>Descargas</p>
                            </div>
                        </div> */}
                    </div>


                </div>

                <div className=" column-1 sm:columns-2 md:columns-3 lg:columns-4 mt-20 ">
                    {data && data.map((image) => (
                        <ImageCard
                            key={image.id}
                            id={image.id}
                            url_photo={image.file_path
                            }
                        />
                    ))}
                </div>

            </main >

            <Footer />
        </>
    )
}
