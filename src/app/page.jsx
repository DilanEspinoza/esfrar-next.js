// import Image from "next/image";
"use client"

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { PhotoCard } from "@/components/PhotoCard/PhotoCard";
import { useFetchImages } from "@/hooks/useFetchImages";

// import PhotoCard from "@components/PhotoCard/PhotoCard";
// import { useFetchImages } from "@hooks/useFetchImages";

export default function Home() {
  // const { data, loading, error } = useFetchImages();
  const { data, error } = useFetchImages()
  console.log(data && data)
  console.log(error && error)
  // console.log(data)
  return (
    <>
      <Header />
      {/* {loading && <div className="text-center text-4xl">Loading...</div>}
            {error && <div className="bg-red-500 w-2/3">Error: {error.message}</div>} */}

      <section className="flex flex-col items-center mx-auto relative">
        <main className="w-4/5 column-1 sm:columns-2 md:columns-3 lg:columns-4">
          {data && data.map((image) => (
            <>
              <PhotoCard key={image.id} id={image.id} url_photo={image.file_path} />
              {console.log(image.file_path)}
            </>
          ))}
        </main>

        <div className='m-4 w-[90%] sm:w-[80%] md:w-[70%] flex flex-col gap-5 relative z-10'>
          <h3 className='font-bold text-xl sm:text-2xl'>
            Free images you can search in esfrar
          </h3>
          <p className='text-sm sm:text-base'>
            Pixabay is a vibrant community of creatives, sharing royalty-free
            images, videos, audio and other media. All content is released by
            Pixabay under the Content License, which makes it safe to use
            without asking for permission or giving credit to the artist - even
            for certain commercial purposes.
          </p>
          <a
            href='#'
            className='text-center w-[80%] sm:w-[60%] md:w-[15%] lg:w-[20%] p-3 bg-blue-600 text-white rounded-xl'>
            Learn more about our license
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
