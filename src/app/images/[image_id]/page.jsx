/* "use client"

import { useRouter } from "next/router"

const router = useRouter()
const image_id = router.query.image-id
 */





"use client"

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Bookmark } from "@/components/icons/Bookmark";
import { CommentIcon } from "@/components/icons/CommentIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { ShareIcon } from "@/components/icons/ShareIcon";
import { ImageDownloader } from "@/components/ImageDownloader/ImageDownloader";
import { useFetchSingleImage } from "@/hooks/useFetchSingleImage";
// import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";



export default function ImagePage() {

    const params = useParams()
    const { image_id } = params

    const { data, error, loading } = useFetchSingleImage(image_id)

    console.log(data)
    console.log(error)

    return (
        <>
            <Header />
            <hr className="border border-neutral-100" />
            <main className='mt-20 w-11/12 mx-auto flex justify-around items-center gap-10 flex-wrap'>
                <div className='w-[60%] h-[500px]'>

                    {loading ? <div className="bg-neutral-50 w-full h-full flex justify-center items-center">
                        <span>Cargando...</span> {/* Puedes poner una animación o un ícono de carga */}
                    </div> : data && data ? (
                        <img
                            className="rounded-2xl w-full h-full object-contain"
                            src={data.url}
                            alt={data.title}
                            width={400}
                            height={400}
                        />
                    ) : (
                        <div className="bg-neutral-200 p-2.5"></div>
                    )}

                </div>


                <aside className=' rounded-lg py-5 shadow-2xl w-[25%]  '>
                    <div className='py-5 px-7 flex flex-col gap-5'>
                        <div className='flex flex-col gap-4'>
                            <p>Free for use under the Pexels</p>
                        </div>
                        <hr className='border border-neutral-100' />
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2'>
                                <button
                                    className='border border-neutral-300 hover:border-neutral-600 py-2 px-8 rounded-xl'
                                    title='like'>
                                    <HeartIcon />
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
                                    <p>Views</p>
                                    <p>1,795</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Downloads</p>
                                    <p>1,643</p>
                                </div>
                            </div>
                        </div>
                        <hr className='border border-neutral-100' />
                        <article className='flex flex-col gap-4 w-full'>
                            <div className='flex gap-3'>
                                <div className='flex items-center justify-center'>
                                    <img
                                        src='https://robohash.org/pepelian'
                                        alt='Fotógrafo'
                                        className='w-[50px] h-[50px] rounded-full object-cover'
                                    />
                                    <div>
                                        <Link href={`/users/${data && data.photographer}/${data && data.id}`} >
                                            <h4>{data && data.photographer}</h4>
                                        </Link>
                                        <p className='font-light text-sm'>6 followers</p>
                                    </div>
                                </div>
                                <button className='hover:bg-neutral-50 p-0 px-5 text-sm rounded-xl'>
                                    Follow
                                </button>
                            </div>
                            <div className='w-full'>
                                <p>{data && data.alt}</p>
                                <div className='my-3'>

                                    <a
                                        href={data && data.photographer_url}
                                        className=''
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        Autor
                                    </a>
                                </div>
                            </div>
                            <div className=''>
                                <ImageDownloader imageUrl={data && data.url} fileName={data && data.title} />
                            </div>
                        </article>
                    </div>
                </aside>

            </main>



            <div className='h-screen mt-20 w-11/12 mx-auto '>
                <h2>Related free images</h2>
                <div className="w-4/5 column-1 sm:columns-2 md:columns-3 lg:columns-4">

                </div>
            </div>
            <div className='h-screen'></div>

            <Footer />
        </>
    )

}
