"use client";

import { useState } from "react";
import { SearchIcon } from "../icons/SearchIcon";
import Link from "next/link";
import { BarsIcon } from "../icons/BarsIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/userSlice"; // ajusta esta importación según tu estructura


export const Header = () => {
    const user = useSelector(state => state.user.user);
    const isLogin = useSelector(state => !!state.user.user);


    const [clickBtnBars, setClickBtnBars] = useState(false);
    const [clickUserAvatar, setClickUserAvatar] = useState(false);
    const [inputValuSearch, setInputValueSearch] = useState("");

    const router = useRouter();
    const dispatch = useDispatch();

    // Obtener usuario y estado login desde Redux
    // const user = useSelector((state) => state.user.user); // asumiendo que guardas usuario en state.user.user
    // const isLogin = useSelector((state) => state.user.isLoggedIn); // o como definas en tu store

    const username = user?.first_name;
    const userId = user?.id;

    const handleChangeInputForm = ({ target }) => setInputValueSearch(target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/images?search=${encodeURIComponent(inputValuSearch)}`);
    };

    const handleBtnBars = () => {
        setClickBtnBars(!clickBtnBars);
    };

    const handleUserMenu = () => {
        setClickUserAvatar(!clickUserAvatar);
    };

    const handleClickBtnLogout = () => {
        dispatch(logout()); // Despachamos la acción para hacer logout
        router.push("/");
    };

    return (
        <header className="flex justify-between lg:justify-between py-3 px-2 lg:px-7 items-center gap-5 w-full">
            <div className="flex w-3/5 gap-10">
                <div className="flex items-center justify-center">
                    <a href="/" className="text-3xl">
                        Esfrar
                    </a>
                </div>
                <form
                    className="md:block lg:flex-1 items-center justify-center gap-2 rounded-xl bg-gray-200"
                    onSubmit={handleSubmit}
                >
                    <div className="mx-3 flex gap-1 lg:w-4/5">
                        <button type="submit">
                            <SearchIcon />
                        </button>
                        <input
                            type="text"
                            placeholder="Busca en Esfrar"
                            className="outline-none border-none bg-gry-200 p-1.5 w-full"
                            onChange={handleChangeInputForm}
                        />
                    </div>
                </form>
            </div>

            {!isLogin ? (
                <div>
                    <div className="cursor-pointer lg:hidden" onClick={handleBtnBars}>
                        <BarsIcon />
                    </div>
                    <nav
                        className={
                            clickBtnBars
                                ? "w-[50%] h-[20%]  absolute top-10 right-5 gap-6  flex justify-center items-center bg-neutral-800 z-[999] text-white py-4 rounded-2xl"
                                : "hidden lg:flex lg:static lg:bg-none lg:top-0 "
                        }
                    >
                        <div className="flex flex-col lg:flex lg:flex-row justify-center items-center gap-3 text-center">
                            <Link href={`/login`}>
                                <button className="py-2 px-5 rounded-2xl cursor-pointer lg:hover:bg-neutral-100 ">
                                    Iniciar Sesión
                                </button>
                            </Link>
                            <Link href={`/register`}>
                                <button className="py-1.5 px-5 rounded-2xl cursor-pointer lg:hover:bg-neutral-100">
                                    Registrarse
                                </button>
                            </Link>
                            <Link
                                href="/upload-image"
                                className="py-1.5 px-5  lg:outline-1 lg:outline-black rounded-2xl lg:hover:bg-blue-600 lg:hover:outline-none lg:hover:text-white"
                            >
                                Subir
                            </Link>
                        </div>
                    </nav>
                </div>
            ) : (
                <div>
                    <div
                        onClick={handleUserMenu}
                        className="bg-neutral-900 flex justify-center items-center rounded-full cursor-pointer"
                    >
                        <Image
                            src={`https://robohash.org/${username}`}
                            alt="User Avatar"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                    </div>
                    {clickUserAvatar ? (
                        <div className="absolute z-50 flex flex-col gap-2 top-15 right-3 w-52 bg-neutral-800 p-5 text-start rounded-lg text-white">
                            <p className="font-bold text-white truncate">{username}</p>
                            <hr />
                            <div className="hover:bg-blue-600 w-full p-2 rounded-lg hover:text-white hover:cursor-pointer">
                                <Link href="/upload-image">Subir</Link>
                            </div>
                            <div className="hover:bg-neutral-100 w-full p-2 rounded-lg hover:text-black hover:cursor-pointer">
                                <Link href={`/users/${userId}`}>Mi Perfil</Link>
                            </div>
                            <div className="hover:bg-neutral-100 w-full p-2 rounded-lg hover:text-black hover:cursor-pointer">
                                <Link href={`/dashboard`}>Dashboard</Link>
                            </div>
                            <div
                                onClick={handleClickBtnLogout}
                                className="hover:bg-neutral-100 w-full p-2 rounded-lg hover:text-black hover:cursor-pointer"
                            >
                                <p>Cerrar Sesión</p>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            )}
        </header>
    );
};
