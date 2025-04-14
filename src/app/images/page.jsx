"use client"

import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { ImageCard } from "@/components/ImageCard/ImageCard"
import useFetchImagesSearch from "@/hooks/useFetchImagesSearch"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function ImagesPage() {
    const searchParams = useSearchParams()
    const search = searchParams.get("search") || ""
    const [numPage, setNumPage] = useState(1)

    const { data, loading } = useFetchImagesSearch(search)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleClickPrev = () => {
        setNumPage((prev) => prev - 1)
        scrollToTop()
    }

    const handleClickNextPage = () => {
        setNumPage((prev) => prev + 1)
        scrollToTop()
    }

    // Asegura que los datos estén correctamente extraídos
    const images = data?.data || []
    const currentPage = data?.currentPage || 1
    const totalPages = data?.totalPages || 1

    return (
        <>
            <Header />
            {loading && <div>Loading...</div>}
            <div className='w-4/5 mx-auto m-10'>
                <h1 className='text-3xl font-bold'>Imágenes gratis de {search}</h1>
                <p>
                    Imágenes gratuitas de {search} para usar a tu gusto. Explora las imágenes increíbles subidas por la comunidad de Esfrar.
                </p>
            </div>

            <section className='flex flex-col items-center mx-auto relative '>
                <main className='w-4/5 column-1 sm:columns-2 md:colums-3 lg:columns-4 '>
                    {images.map((e) => (
                        <ImageCard
                            key={e.id}
                            url_photo={e.file_path}
                            id={e.id}
                        />
                    ))}
                </main>
                <div className='flex flex-col items-center mt-6 gap-3 m-5'>
                    <div className='flex gap-3'>
                        {data && data.currentPage === 1
                            ? ""
                            : <button
                                onClick={handleClickPrev}
                                className='border border-neutral-200 p-3 rounded-3xl hover:bg-neutral-100 cursor-pointer'>
                                Regresar
                            </button>}
                        {
                            data && data.currentPage === 15 ? ""

                                : <button
                                    onClick={handleClickNextPage}
                                    className='border border-neutral-200 p-3 rounded-3xl hover:bg-neutral-100 cursor-pointer'>
                                    Siguente Pagina
                                </button>}
                    </div>
                    Page {numPage} of {totalPages}
                </div>
            </section>

            <Footer />
        </>
    )
}
