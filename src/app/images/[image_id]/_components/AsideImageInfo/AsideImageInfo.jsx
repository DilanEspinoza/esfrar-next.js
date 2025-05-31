
// import { BookmarkIcon } from "@/components/icons/BookmarkIcon";
// import { HeartIcon } from "@/components/icons/HeartIcon";
// import { ShareIcon } from "@/components/icons/ShareIcon";
import { ImageDownloader } from "@/components/ImageDownloader/ImageDownloader";
import Link from "next/link";
// import { useLike } from "@/hooks/useLike";
// import { useFavorite } from "@/hooks/useFavorite";
// import Link from "next/link";


export const AsideImageInfo = ({ user_id, user_name, last_name, image_id, image_url, image_title }) => {





    return (
        <aside className=' rounded-lg py-5 shadow-2xl w-full lg:w-[25%]  '>
            <div className='py-5 px-7 flex flex-col gap-5'>
                <div className='flex gap-1'>
                    <p>Imagen Subida por </p>
                    <div>

                        <Link href={`/users/${user_id}`} >
                            <span className="font-bold">{user_name} {last_name}</span>
                        </Link>
                    </div>
                </div>
                {/* <hr className='border border-neutral-100' /> */}
                {/*           <div className='flex flex-col gap-3'>




                    <div className=''>
                        <div className='flex justify-between'>
                            <p>Me gusta</p>
                          <p>{likesCount}</p> 
                        </div>
                        <div className='flex justify-between'>
                            <p>Descargas</p>
                            <p>1,643</p>
                        </div>
                    </div>
                </div> 
                
                {/* <hr className='border border-neutral-100' /> */}
                <article className='flex flex-col gap-4 w-full'>
                    {/* <div className='flex justify-between items-center gap-3'> 
                        <div className='flex items-center justify-center'>
                            <img
                                src='https://robohash.org/pepelian'
                                alt='Fotógrafo'
                                className='w-[50px] h-[50px] rounded-full object-cover'
                            />
                            <div>
                                <Link href={`/users/${user_id}`} >
                                    <h4>{user_name} {last_name}</h4>
                                </Link>
                                {/* <p className='font-light text-sm'>0 seguidores</p> 
                            </div>

                        </div>

                        {/*    <div className="">
                            <button className='hover:bg-neutral-50 p-0 px-5 text-sm rounded-xl'>
                                Seguir
                            </button>
                        </div> 
                    </div> */}
                    <div className=''>
                        <ImageDownloader imageUrl={image_url} fileName={image_title} />
                    </div>
                </article>
            </div>
        </aside>
    )
}