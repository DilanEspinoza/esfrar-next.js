
import ModalUserList from "@/components/ModalUserList/ModalUserList"
import Link from "next/link";
import { useEffect, useState } from "react";



export const HeaderDashboard = () => {

    // Datos de prueba
    const followers = [
        { id: 1, name: "Juan Pérez", avatar: "/avatars/avatar1.jpg" },
        { id: 2, name: "Ana Gómez", avatar: "/avatars/avatar2.jpg" },
        { id: 2, name: "Ana Gómez", avatar: "/avatars/avatar2.jpg" },
        { id: 2, name: "Ana Gómez", avatar: "/avatars/avatar2.jpg" },
        { id: 2, name: "Ana Gómez", avatar: "/avatars/avatar2.jpg" },
        { id: 2, name: "Ana Gómez", avatar: "/avatars/avatar2.jpg" },
        { id: 2, name: "Ana Gómez", avatar: "/avatars/avatar2.jpg" },
    ];

    const following = [
        { id: 3, name: "Carlos Ruiz", avatar: "/avatars/avatar3.jpg" },
        { id: 4, name: "María Torres", avatar: "/avatars/avatar4.jpg" },
    ];

    const [showModalFollowers, setShowModalFollowers] = useState(false)
    const [showModalFollowing, setShowModalFollowing] = useState(false)

    useEffect(() => {
        const handleCloseUserList = () => {
            setShowModalFollowers(false);
            setShowModalFollowing(false);
        };

        window.addEventListener("closeModalUserList", handleCloseUserList);
        return () => window.removeEventListener("closeModalUserList", handleCloseUserList);
    }, []);

    return (
        <>
            <div className="flex justify-between  my-10">

                <h1 className="text-3xl font-bold mb-6">Mis imágenes</h1>

                <div className="flex gap-7 items-center">
                    <div className="flex gap-5">
                        <div className="flex gap-2 cursor-pointer" onClick={() => setShowModalFollowers(true)}>
                            <span className="font-bold">{followers.length}</span>
                            <p>Followers</p>
                        </div>
                        <div className="flex  gap-2 cursor-pointer" onClick={() => setShowModalFollowing(true)}>
                            <span className="font-bold">{following.length}</span>
                            <p>Following</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div >
                            <Link href="/dashboard/favorites">
                                <div className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 ">
                                    <p>Favorites</p>
                                </div>
                            </Link>
                        </div>
                        <div >
                            <Link href="/dashboard/likes">
                                <div className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 ">
                                    <p>Likes</p>
                                </div>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>

            <ModalUserList
                isOpen={showModalFollowers}
                onClose={() => setShowModalFollowers(false)}
                title="Seguidores"
                users={followers}
            />

            <ModalUserList
                isOpen={showModalFollowing}
                onClose={() => setShowModalFollowing(false)}
                title="Siguiendo"
                users={following}
            />

        </>
    )
}