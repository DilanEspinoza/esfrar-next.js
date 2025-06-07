// import { ShareIcon } from "@/components/icons/ShareIcon";
import { LikeButton } from "./_components/LikeButton";
import { FavoriteButton } from "./_components/FavoriteButton";
import { ImageDownloader } from "@/components/ImageDownloader/ImageDownloader";
import Image from "next/image";
import Link from "next/link";



export const AsideImageInfo = ({ user_id, user_name, last_name, image_id, image_url, image_title }) => {

    return (
        <aside className="sticky top-6 rounded-lg py-5 shadow-2xl w-[300px] ">
            <div className="p-5 flex flex-col gap-5">

                <article className="flex flex-col gap-4 w-full justify-center">
                    <div className="flex gap-3 justify-between">
                        <div className="flex items-center justify-center">
                            <Image
                                src={`https://robohash.org/${user_name}`}
                                alt=""
                                className=" 
                            rounded-full object-cover"
                                width={50}
                                height={50}
                            />
                            <div >
                                <Link href={`/users/${user_id}`}>
                                    <h4>{user_name}</h4>
                                </Link>
                                <p className="font-light text-sm">6 followers</p>
                            </div>
                        </div>
                        <button className="hover:bg-neutral-100 py-3 cursor-pointer px-6  text-sm rounded-xl">Seguir</button>
                    </div>

                </article>
                <hr className="border border-neutral-100" />

                <div className="flex  gap-4 justify-center">
                    {/* button like */}
                    <LikeButton image_id={image_id} />

                    {/* button favorites */}
                    <FavoriteButton image_id={image_id} />
                </div>
                <hr className="border border-neutral-100" />
                <ImageDownloader imageUrl={image_url} file_name={image_title} />
            </div>
        </aside >
    );
};
