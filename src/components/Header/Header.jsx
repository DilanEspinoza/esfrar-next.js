"use client";

import {/*  useContext, */ useEffect, useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";
import Link from "next/link";
import { BarsIcon } from "../icons/BarsIcon";
import Image from "next/image";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";


export const Header = () => {






    const [user, setUser] = useState(null);
    const [clickBtnBars, setClickBtnBars] = useState(false)
    const [clickUserAvatar, setClickUserAvatar] = useState(false)
    const [inputValuSearch, setInputValueSearch] = useState("")
    const { isLogin } = useLogin()

    const router = useRouter()


    useEffect(() => {
        if (typeof window !== "undefined") {
            const json = localStorage.getItem("user");
            const userParsed = JSON.parse(json);
            setUser(userParsed);
        }
    }, []);

    const username = user?.first_name
    const userId = user?.id



    const handleChangeInputForm = ({ target }) => setInputValueSearch(target.value)


    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/images?search=${encodeURIComponent(inputValuSearch)}`)
    };





    const handleBtnBars = () => {
        setClickBtnBars(!clickBtnBars)

    }

    const handleUserMenu = () => {
        setClickUserAvatar(!clickUserAvatar)

    }
    const handleClickBtnLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        // window.location.reload();
        router.push("/")
    }



    return (
        <>
            <header className=' flex justify-between py-3 px-7 items-center gap-5  '>
                <div className=' flex w-3/5  gap-10'>
                    <a href='/' className='text-3xl'>
                        esfrar
                    </a>
                    <form
                        className='hidden md:block flex-1 items-center justify-between gap-2 rounded-xl  bg-gray-200'
                        onSubmit={handleSubmit}
                    >
                        <div className=' mx-3 flex gap-1 w-4/5'>
                            <button type='submit'>
                                <SearchIcon />
                            </button>
                            <input
                                type='text'
                                placeholder='Busca imagenes gratis'
                                className='w-full outline-none border-none bg-gray-200 p-1.5'
                                onChange={handleChangeInputForm}
                            />
                        </div>


                    </form>
                </div >
                <div className="cursor-pointer lg:hidden"
                    onClick={handleBtnBars}
                >
                    <BarsIcon />
                </div>

                <nav className={clickBtnBars ? " absolute top-10 right-10 gap-6 w-1/5  justify-end items-center bg-neutral-100 z-[999]  py-4 " : "hidden lg:flex lg:static lg:bg-none lg:top-0 "}>
                    <div className=' flex flex-col lg:flex lg:flex-row justify-center items-center gap-3 text-center  '>
                        {!isLogin ? <div>
                            <Link href={`login`}>
                                <button className='py-2 px-5 rounded-2xl cursor-pointer lg:hover:bg-neutral-100 '>
                                    Iniciar Seción
                                </button>
                            </Link>
                            <Link href={`register`}>
                                <button className='py-1.5 px-5 rounded-2xl cursor-pointer lg:hover:bg-neutral-100'>
                                    Registrarse
                                </button>
                            </Link>
                        </div> :
                            <div className="relative mr-2">

                                <div
                                    onClick={handleUserMenu}
                                    className="bg-neutral-900 flex justify-center items-center rounded-full cursor-pointer">
                                    <Image
                                        src={`https://robohash.org/${username}`}
                                        alt="User Avatar"
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                </div>

                                {clickUserAvatar ? <div className="absolute z-50 flex flex-col gap-2 top-15 right-3 w-52 bg-neutral-800 p-5 text-start ¿ rounded-lg text-white ">
                                    <p className="font-bold text-white truncate">{username}</p>

                                    <hr />

                                    <div className="hover:bg-neutral-100 w-full p-2 rounded-lg hover:text-black hover:cursor-pointer">

                                        <Link href={`/users/${userId}`}>Mi Perfil</Link>
                                    </div>
                                    {/*   <div className="hover:bg-neutral-100 w-full p-2 rounded-lg hover:text-black hover:cursor-pointer">

                                        <Link href="">Configuración</Link>
                                    </div> */}

                                    <div onClick={handleClickBtnLogout} className="hover:bg-neutral-100 w-full p-2 rounded-lg hover:text-black hover:cursor-pointer">

                                        <p >Cerrar Seción</p>
                                    </div>
                                </div> : ""}
                            </div>}




                        {/*      */}

                        <Link href="/upload-image">
                            <button className='py-1.5 px-5  lg:outline-1 lg:outline-black rounded-2xl lg:hover:bg-blue-600 lg:hover:outline-none lg:hover:text-white'>
                                Subir
                            </button>
                        </Link>
                    </div>


                    {/*       <div onClick={handleBtnUser} className="hover:bg-neutral-950 p-2 rounded-full hover:text-white hover:cursor-pointer flex-none">
                        <UserIcon className="size-8" />                    </div>
                    <div
                        className={` ${isBtnUserActive ? "block" : "hidden"
                            } fixed  w-32 flex flex-col text-center top-16 right-8 bg-neutral-900 py-3  backdrop-blur-xl z-[999] rounded-xl`}>
                        <div className=''>
                            <div className='flex flex-col gap-2'>
                                <ul>
                                    <li className="text-white">
                                        <Link href="upload" >Upload</Link>
                                    </li>


                                </ul>
                                <hr className='border border-neutral-600' />{" "}
                                <p className='text-lg text-white'>Log out</p>
                            </div>
                        </div>

                    </div> */}
                </nav>

            </header >
        </>
    );
};