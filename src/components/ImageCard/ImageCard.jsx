import Link from "next/link"

import Image from "next/image"

export const ImageCard = ({ url_photo, id }) => {
    return (
        <>
            <article className=" ">
                <div className="relative ">
                    <Link href={`/images/${id}`}>
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
