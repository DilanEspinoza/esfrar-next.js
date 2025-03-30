import Link from "next/link"
import { Bookmark } from "../icons/Bookmark"
import Image from "next/image"

export const PhotoCard = ({ url_photo, id }) => {

    return (
        <>
            <article className=" ">
                <div className="relative ">

                    <button
                        className="absolute p-2 border border-neutral-400 hover:border-white rounded-md top-5 right-5" title="like">
                        <Bookmark className="text-white" />
                    </button>
                    <Link href={`/photos/${id}`}>
                        <Image
                            src={url_photo}
                            className="bg-slate-600 w-full h-full object-cover max-w-full mb-5 block" alt=""
                            width={200}
                            height={200}
                        />
                    </Link>
                </div>
            </article>
        </>
    )
}
