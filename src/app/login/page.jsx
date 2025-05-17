
"use client"

import axios from "axios";
import { Header } from "@/components/Header/Header";
import { toast } from "nextjs-toast-notify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

export default function Login() {
  const { updateUserId } = useUserContext();
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.email || !inputValue.password) {
      toast.error("Por favor completa todos los campos.");
      return;
    }
    findUser();
  };

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const findUser = async () => {
    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        console.error("NEXT_PUBLIC_API_URL no está definida");
        return;
      }

      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/api/login",
        {
          email: inputValue.email,
          password: inputValue.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      updateUserId(res.data.userId);

      if (res.status === 200 && res.data.token && res.data.user) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      toast.success(`${res.data.message}`, {
        duration: 4000,
        progress: true,
        position: "bottom-right",
        transition: "swingInverted",
        icon: "",
        sound: false,
      });

      router.push("/");
    } catch (err) {
      console.error("Error:", err);

      toast.error(
        err?.response?.data?.message || "Hubo un error al intentar hacer login",
        {
          duration: 4000,
          progress: true,
          position: "bottom-right",
          transition: "swingInverted",
          icon: "",
          sound: false,
        }
      );
    }
  };

  return (
    <>
      <Header />
      <div className='min-h-full flex flex-col items-center h-screen justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md flex flex-col gap-3'>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 '>
            Iniciar Sesión
          </h2>
          <div className='w-full border-t border-gray-300' />
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form
              className='space-y-6'
              onSubmit={handleOnSubmit}
            >
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                  Correo electrónico
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='text'
                    value={inputValue.email}
                    onChange={handleChange}
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                  Contraseña
                </label>
                <div className='mt-1 relative'>
                  <input
                    id='password'
                    name='password'
                    type={showPassword ? "text" : "password"}
                    value={inputValue.password}
                    onChange={handleChange}
                    required
                    autoComplete='current-password'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                  <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='absolute inset-y-0 right-0 flex items-center px-2 text-sm text-gray-500'
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                    Recordarme
                  </label>
                </div>

                <div className='text-sm'>
                  <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                    ¿Olvidé mi contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Acceder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
