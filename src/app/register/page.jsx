"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "nextjs-toast-notify";
import { Header } from "@/components/Header/Header";
import { useRouter } from "next/navigation";


export default function Register() {
    const router = useRouter();

    const [inputValue, setInputValue] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setInputValue({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
        })
        createUser()

    };

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const createUser = async () => {
        try {
            const res = await axios
                .post(process.env.NEXT_PUBLIC_API_URL + '/api/register', {
                    first_name: inputValue.first_name,
                    last_name: inputValue.last_name,
                    username: inputValue.username,
                    email: inputValue.email,
                    password: inputValue.password,
                },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })

            toast.success(`${res.data.message}`, {
                duration: 4000,
                progress: true,
                position: "bottom-right",
                transition: "swingInverted",
                icon: '',
                sound: false,
            });

            console.log("resssssssss")
            console.log(res)
            if (res.status === 201) {
                router.push("/login");
            }


        } catch (err) {

            toast.error(err.response.data.message, {
                duration: 4000,
                progress: true,
                position: "bottom-right",
                transition: "swingInverted",
                icon: '',
                sound: false,
            });
        }

    };

    return (
        <>
            <Header />
            {/* <Toaster /> */}
            <div className='min-h-full flex flex-col items-center h-screen justify-center py-12 sm:px-6 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-md flex flex-col gap-3'>
                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                        Crear una nueva cuenta
                    </h2>
                    <div className='w-full border-t border-gray-300' />
                </div>

                <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                    <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                        <form className='space-y-6'
                            onSubmit={handleOnSubmit}
                        >
                            {/* Firstname */}
                            <div>
                                <label
                                    htmlFor='first_name'
                                    className='block text-sm font-medium text-gray-700'>
                                    Nombre
                                </label>
                                <div className='mt-1'>
                                    <input
                                        id='first_name'
                                        name='first_name'
                                        type='text'
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                        onChange={handleChange}
                                        value={inputValue.first_name}
                                    />
                                </div>
                            </div>
                            {/* Lastname */}
                            <div>
                                <label
                                    htmlFor='last_name'
                                    className='block text-sm font-medium text-gray-700'>
                                    Apellido
                                </label>
                                <div className='mt-1'>
                                    <input
                                        id='last_name'
                                        name='last_name'
                                        type='text'
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                        onChange={handleChange}
                                        value={inputValue.last_name}
                                    />
                                </div>
                            </div>
                            {/* Username */}
                            <div>
                                <label
                                    htmlFor='username'
                                    className='block text-sm font-medium text-gray-700'>
                                    Nombre de usuario
                                </label>
                                <div className='mt-1'>
                                    <input
                                        id='username'
                                        name='username'
                                        type='text'
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                        onChange={handleChange}
                                        value={inputValue.username}
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-700'>
                                    Correo electronico
                                </label>
                                <div className='mt-1'>
                                    <input
                                        id='email'
                                        name='email'
                                        type='text'
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                        onChange={handleChange}
                                        value={inputValue.email}
                                    />
                                </div>
                            </div>
                            {/* Password */}
                            <div>
                                <label
                                    htmlFor='password'
                                    className='block text-sm font-medium text-gray-700'>
                                    Contraseña
                                </label>
                                <div className='mt-1 relative'>
                                    <input
                                        id='password'
                                        name='password'
                                        type={showPassword ? "text" : "password"}
                                        autoComplete='current-password'
                                        required
                                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                        onChange={handleChange}
                                        value={inputValue.password}
                                    />
                                    <button
                                        type='button'
                                        onClick={togglePasswordVisibility}
                                        className='absolute inset-y-0 right-0 flex items-center px-2 text-sm text-gray-500'>
                                        {showPassword ? "Ocultar" : "Mostrar"}
                                    </button>
                                </div>
                            </div>

                            {/*         <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <input
                                        id='remember-me'
                                        name='remember-me'
                                        type='checkbox'
                                        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                                    />
                                    <label
                                        htmlFor='remember-me'
                                        className='ml-2 block text-sm text-gray-900'>
                                        Recordarme
                                    </label>
                                </div>

                                <div className='text-sm'>
                                    <a
                                        href='#'
                                        className='font-medium text-indigo-600 hover:text-indigo-500'>
                                        Forgot your password?
                                    </a>
                                </div>
                            </div> */}

                            <div>
                                <button
                                    type='submit'
                                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer'>
                                    Crear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
