"use client"

import { useEffect, useState } from "react"
import { ImageCard } from "@/components/ImageCard/ImageCard"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import axios from "axios"
import { toast } from "nextjs-toast-notify";
import { useRouter } from "next/navigation"
import { Modal } from '../components/Modal'


export default function Dashboard() {
    const [token, setToken] = useState(null);
    const [images, setImages] = useState([])
    const [error, setError] = useState(null)
    const [userId, setUserId] = useState(null)

    const [showModal, setShowModal] = useState(false);


    const router = useRouter()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        const id = user?.id
        if (!id) return

        setUserId(id)

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/images/users/user?user_id=${id}`)
            .then(res => {
                setImages(res.data)
            })
            .catch(err => {
                console.error(err)
                setError("Error al cargar imágenes")
            })
    }, [])

    const handleOnClick = async (imageId) => {
        if (!userId) return alert("Usuario no identificado")

        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/images/${imageId}`, {
                data: {
                    image_id: imageId,
                    user_id: userId,
                }
            })

            setImages(prev => prev.filter(img => img.id !== imageId))

            toast.success("Imagen eliminada con éxito", {
                duration: 4000,
                progress: true,
                position: "bottom-right",
                transition: "swingInverted",
                icon: '',
                sound: false,
            });
        } catch (err) {
            console.error(err)
            toast.error("Error al eliminar la imagen ", {
                duration: 4000,
                progress: true,
                position: "bottom-right",
                transition: "swingInverted",
                icon: '',
                sound: false,
            });
        }
    }
    setShowModal(true)

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);

        if (!storedToken) {
            router.push("/login");
        }
    }, []);
    return (
        <>
            <Header />
            <main className="w-[90%] mx-auto p-5 my-10">
                <h1 className="text-3xl font-bold mb-6">Mis imágenes</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {images.map(image => (
                        <div key={image.id} className="relative">
                            <ImageCard id={image.id} url_photo={image.file_path} />
                            <button
                                onClick={() => handleOnClick(image.id)}
                                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>

                {images.length === 0 && <p>No has subido ninguna imagen.</p>}
            </main>
            <Footer />

            {/* Aquí renderizas los toasts */}
        </>
    )
}