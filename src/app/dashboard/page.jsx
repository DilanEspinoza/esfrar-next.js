"use client"

import { ImageCard } from '@/components/ImageCard/ImageCard';
import { useAuth } from '@/context/AuthContext';
import { Dialog, DialogBackdrop, Menu, MenuButton, MenuItems, Transition } from '@headlessui/react';
import {
    XMarkIcon,
    MagnifyingGlassIcon,
    HomeIcon,
    Bars3Icon as MenuIcon,
    HeartIcon,
    BookmarkIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import { Fragment, useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from "axios"
import { Bounce, toast } from "react-toastify"
import { ModalImage } from '@/components/ModalImage/ModalImage'
import { useRouter } from 'next/navigation';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}


export default function ImagesUser() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [images, setImages] = useState([])
    const [error, setError] = useState(null)
    const [showModalImage, setShowModalImage] = useState(false);
    const [imageToDelete, setImageToDelete] = useState(null);
    const [inputValuSearch, setInputValueSearch] = useState("");



    const { token } = useAuth();
    const user = useSelector((state) => state.user.user);

    const router = useRouter();


    const handleChangeInputForm = ({ target }) => setInputValueSearch(target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/images?search=${encodeURIComponent(inputValuSearch)}`);
    };


    const navigation = [
        { name: 'Tus imagenes', href: '/dashboard', icon: HomeIcon, current: true },
        { name: 'Imagenes Favoritas', href: '/dashboard/favorites', icon: BookmarkIcon, current: false },
        { name: 'Me Gustan', href: '/dashboard/likes', icon: HeartIcon, current: false },
    ];
    const userNavigation = [
        { name: 'Tu Perfil', href: `/users/${user?.id}` },
        { name: 'Subir', href: '/upload-image' },
        { name: 'Cerrar Sesión', href: '#' },
    ];

    useEffect(() => {

        if (!token) {
            toast.error("Token no encontrado. Por favor inicia sesión nuevamente.");
            router.push("/login");
            return;
        }


        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/images/users/${user?.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
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
        setShowModalImage(true)
    }


    // Eliminar imagen confirmada
    const handleDelete = async () => {
        if (!user?.id || !imageToDelete) {
            setShowModalImage(false)
            return alert("Usuario o imagen no identificados")
        }

        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/images/${imageToDelete}`, {
                data: {
                    image_id: imageToDelete,
                    user_id: user?.id,
                }, headers: {
                    Authorization: `Bearer ${token}`,
                },
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
            toast.error("¡Hubo un error al eliminar la imagen! ", {
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
            setShowModalImage(false)
            setImageToDelete(null)
        }
    }


    return (

        <>
            {/* <Header /> */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <DialogBackdrop className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                    <nav className="px-2 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-4 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            <div className="flex items-center justify-center">
                                <a href="/" className="text-3xl">
                                    Esfrar
                                </a>
                            </div>
                        </div>
                        <div className="mt-5 flex-grow flex flex-col">
                            <nav className="flex-1 px-2 pb-4 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                        <button
                            type="button"
                            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex">
                                <form className="w-full flex md:ml-0" action="#"
                                    onSubmit={handleSubmit}

                                >
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search-field"
                                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                            placeholder="Search"
                                            type="search"
                                            name="search"
                                            onChange={handleChangeInputForm}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                {/*       <button
                                    type="button"
                                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <MenuButton
                                            as="button"
                                            className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <Image
                                                className="rounded-full"
                                                width={50}
                                                height={50}
                                                src={`https://robohash.org/${user?.first_name}`}
                                                alt=""
                                            />
                                        </MenuButton>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems
                                            as="div"
                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            {userNavigation.map((item) => (
                                                <MenuItems
                                                    key={item.name}
                                                    as="div"
                                                >
                                                    {({ active }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </MenuItems>
                                            ))}
                                        </MenuItems>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-semibold text-gray-900">Mis imagenes </h1>
                            </div>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                                <div className="py-4">
                                    {/* <div className="border-4 border-dashed border-indigo-900 rounded-lg h-96" /> */}
                                    <div className="w-[90%] mx-auto p-5 my-10">

                                        {/* <HeaderDashboard /> */}

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
                                    </div>
                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
            {/* <Footer /> */}
            <ModalImage isOpen={showModalImage} onClose={() => setShowModalImage(false)}>
                <h2 className="text-xl font-semibold mb-4">Confirmar eliminación</h2>
                <p>¿Estás seguro que quieres eliminar esta imagen?</p>
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        onClick={() => setShowModalImage(false)}
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
            </ModalImage>
        </>
    );
}

