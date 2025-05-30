"use client"

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Bookmark } from "@/components/icons/Bookmark";
import { CommentIcon } from "@/components/icons/CommentIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { ShareIcon } from "@/components/icons/ShareIcon";
import { ImageDownloader } from "@/components/ImageDownloader/ImageDownloader";
import useFetchSingleImage from "@/hooks/useFetchSingleImage";
import { useFetchUserById } from "@/hooks/useFindUserById";
import axios from "axios";
// import { useFetchUserById } from "@/hooks/useFindUserById";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function ImagePage() {

    const params = useParams()
    const { image_id } = params

    const { data, error, loading } = useFetchSingleImage(image_id)
    const { user_id } = data
    const { userFound, errorUserFound } = useFetchUserById(user_id)


    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    const userId = userFound?.id;

    useEffect(() => {
        const fetchLikesData = async () => {
            try {
                // Obtener número de likes
                const resCount = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/images/${image_id}/likes/count`);
                const countData = await resCount.json();
                setLikes(countData.likes);

                // Verificar si el usuario actual ya dio like
                if (userId) {
                    const resCheck = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/images/${image_id}/likes/check?user_id=${userId}`
                    );
                    const checkData = await resCheck.json();
                    setHasLiked(checkData.hasLiked);
                }
            } catch (err) {
                console.error("Error al cargar información de likes", err);
            }
        };

        fetchLikesData();
    }, [image_id, userId]);
    const handleLike = async () => {
        try {
            if (!hasLiked) {
                // Dar like
                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/images/${image_id}/like`, { user_id: userId });
                setLikes(prev => prev + 1);
                setHasLiked(true);
            } else {
                // Quitar like
                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/images/${image_id}/like`, { data: { user_id: userId } });
                setLikes(prev => prev - 1);
                setHasLiked(false);
            }
        } catch (error) {
            console.error("Error al cambiar like:", error);
        }
    };


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


                <aside className=' rounded-lg py-5 shadow-2xl w-full lg:w-[25%]  '>
                    <div className='py-5 px-7 flex flex-col gap-5'>
                        <div className='flex flex-col gap-4'>
                            <p>Libre para usar bajo Esfrar</p>
                        </div>
                        <hr className='border border-neutral-100' />
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2'>
                                <button
                                    onClick={handleLike}
                                    className='border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl'
                                    title={hasLiked ? "Quitar like" : "Dar like"}>
                                    {hasLiked ? <HeartIcon fill="red" stroke="red" /> : <HeartIcon fill="none" stroke="black" />}
                                </button>
                                <button
                                    className='border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl'
                                    title='Add to collection'>
                                    {/* <SaveIcon /> */}
                                    <Bookmark />
                                </button>
                                <button
                                    className='border border-neutral-300 hover:border-neutral-600 py-2 p-2 rounded-xl'
                                    title='comment'>
                                    <CommentIcon />
                                </button>
                                <button
                                    className='border border-neutral-300 hover:border-neutral-600 py-2 p-2 rounded-xl'
                                    title='share'>
                                    <ShareIcon />
                                </button>
                            </div>

                            <div className=''>
                                <div className='flex justify-between'>
                                    <p>Me gusta</p>
                                    <p>{likes}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Descargas</p>
                                    <p>1,643</p>
                                </div>
                            </div>
                        </div>
                        <hr className='border border-neutral-100' />
                        <article className='flex flex-col gap-4 w-full'>
                            <div className='flex justify-between items-center gap-3'>
                                <div className='flex items-center justify-center'>
                                    <img
                                        src='https://robohash.org/pepelian'
                                        alt='Fotógrafo'
                                        className='w-[50px] h-[50px] rounded-full object-cover'
                                    />
                                    <div>
                                        <Link href={`/users/${data && data.user_id}`} >
                                            <h4>{data && userFound.first_name}</h4>
                                        </Link>
                                        <p className='font-light text-sm'>0 seguidores</p>
                                    </div>

                                </div>

                                <div className="">
                                    <button className='hover:bg-neutral-50 p-0 px-5 text-sm rounded-xl'>
                                        Seguir
                                    </button>
                                </div>
                            </div>
                            <div className=''>
                                <ImageDownloader imageUrl={data && data.url} fileName={data && data.title} />
                            </div>
                        </article>
                    </div>
                </aside>

            </main>


            {/* 
            <div className='h-screen mt-20 w-11/12 mx-auto '>
                <h2 className="font-bold text-xl">Related free images</h2>
                <div className="w-4/5 column-1 sm:columns-2 md:columns-3 lg:columns-4">

          {data && data.map((image) => (
            <ImageCard
              key={image.id}
              id={image.id}
              url_photo={image.file_path} />
          ))}
      
                </div>
            </div>
            <div className='h-screen'></div> */}

            <Footer />
        </>
    )

}
