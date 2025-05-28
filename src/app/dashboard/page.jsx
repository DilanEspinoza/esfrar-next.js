'use client'

import { useEffect, useState } from "react"
import { ImageCard } from "@/components/ImageCard/ImageCard"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Modal } from '@/components/Modal/Modal' // asegurate que es el modal que hicimos con Tailwind
import { Bounce, toast } from "react-toastify"

export default function Dashboard() {
    const [token, setToken] = useState(null);
    const [images, setImages] = useState([])
    const [error, setError] = useState(null)
    const [userId, setUserId] = useState(null)

    const [showModal, setShowModal] = useState(false);
    const [imageToDelete, setImageToDelete] = useState(null);

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

    // Abrir modal y asignar imagen a eliminar
    const confirmDelete = (imageId) => {
        setImageToDelete(imageId)
        setShowModal(true)
    }

    // Eliminar imagen confirmada
    const handleDelete = async () => {
        if (!userId || !imageToDelete) {
            setShowModal(false)
            return alert("Usuario o imagen no identificados")
        }

        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/images/${imageToDelete}`, {
                data: {
                    image_id: imageToDelete,
                    user_id: userId,
                }
            })

            setImages(prev => prev.filter(img => img.id !== imageToDelete))

            toast.success("Imagen eliminada con éxito", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } catch (err) {
            console.error(err)
            toast.error("Error al eliminar la imagen ", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } finally {
            setShowModal(false)
            setImageToDelete(null)
        }
    }

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
                                onClick={() => confirmDelete(image.id)} // cambiar aquí
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

            {/* Modal de confirmación */}
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <h2 className="text-xl font-semibold mb-4">Confirmar eliminación</h2>
                <p>¿Estás seguro que quieres eliminar esta imagen?</p>
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                    >
                        Sí, eliminar
                    </button>
                </div>
            </Modal>
        </>
    )
}
