"use client"
import { Header } from "@/components/Header/Header";
import { useFetchImagesFavorites } from "@/hooks/useFetchImagesFavorites";
import { useEffect, useState } from "react";
import { ImageCard } from "@/components/ImageCard/ImageCard"; // si no lo tienes, importa el correcto

export default function Favorites() {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isClient, setIsClient] = useState(false); // 👈 clave para evitar el hydration mismatch

    useEffect(() => {
        setIsClient(true); // Ahora sabemos que estamos en el cliente
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.id) {
            setUserId(user.id);
        }
    }, []);

    const { images } = useFetchImagesFavorites(userId);
    console.log(images)

    if (!isClient || !userId) return null; // 👈 nada se renderiza hasta que el cliente esté listo

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
                <div>
                    <h1 className="text-3xl font-bold mb-6">Mis imágenes favoritas</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {images.map(image => (
                        <div key={image.image_id} className="relative">
                            <ImageCard id={image.image_id} url_photo={image.file_path} />
                            <button
                                onClick={() => confirmDelete(image.id)}
                                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>

                {images && images.length === 0 && (
                    <p>No tienes ninguna imagen favorita.</p>
                )}
            </main>
        </>
    );
}
