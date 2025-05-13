"use client";

import { Header } from "@/components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

import { toast } from "nextjs-toast-notify";


export default function UploadImage() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const json = localStorage.getItem("user");
            const userParsed = JSON.parse(json);
            setUser(userParsed);
        }
    }, []);

    const userId = user?.id

    const router = useRouter();
    const [token, setToken] = useState(null);


    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);

        if (!storedToken) {
            router.push("/login");
        }
    }, []);


    const [inputValue, setInputValue] = useState({
        title: "",

        location: ""
    })


    const handleOnChangeInput = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const [tag, setTag] = useState({ title: "" });
    const [tags, setTags] = useState([]);
    const [isClient, setIsClient] = useState(false);

    /*    const handleImageChange = (event) => {
           const file = event.target.files[0];
           if (file) {
               setFileName(file.name);
               const reader = new FileReader();
               reader.onload = (e) => {
                   setImage(e.target.result);
               };
               reader.readAsDataURL(file);
           }
       }; */



    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setImage(file);
        }
    };

    const handleOnClick = () => {
        if (tag.title.trim() !== "" && tags.length < 3) {
            setTags([...tags, tag.title]);
            setTag({ title: "" });
        }
    };

    const handleChangeInputTags = (event) => {
        setTag({ title: event.target.value });
    };


    const handleOnSubmit = (event) => {
        event.preventDefault()
        setImage(null)
        setInputValue({
            title: "",
            location: ""
        })

        setTags([])

        uploadImage()
    }

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("title", inputValue.title);
        formData.append("user_id", userId)
        console.log(userId)
        formData.append("tags", JSON.stringify(tags));
        formData.append("location", inputValue.location);


        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/upload', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(res.data);
            toast.success(`${res.data.message}`, {
                duration: 4000,
                progress: true,
                position: "bottom-right",
                transition: "swingInverted",
                icon: '',
                sound: false,
            });
        } catch (err) {
            toast.error(`${err}`, {
                duration: 4000,
                progress: true,
                position: "bottom-right",
                transition: "swingInverted",
                icon: '',
                sound: false,
            });
            console.error("Error al subir la imagen:", err);
        }

    };



    useEffect(() => {

        setIsClient(true);
    }, []);

    return (
        <>
            <Header />
            <main className="w-full my-14">
                <form className="w-full md:w-[60%]  mx-auto p-10 bg-neutral-50 border border-neutral-200 rounded-4xl" method="post" onSubmit={handleOnSubmit}>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col justify-center items-center w-">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="border text-center border-dashed border-white text-white p-4 bg-neutral-700 cursor-pointer"
                            />
                            {isClient && image && typeof image === "object" && (
                                <div className="mt-4 h-full">
                                    <p className="text-lg mb-2">Vista previa:</p>
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="Vista previa"
                                        className="max-w-full max-h-64 border border-gray-300 rounded"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-6 w-[90%] ">
                            <div className="flex flex-col gap-1 w-full md:w-auto">
                                <label htmlFor="title" className="font-bold">Titulo</label>
                                <input
                                    className="outline-none p-1.5 rounded-md border border-neutral-400"
                                    type="text"
                                    placeholder="Enter title"
                                    id="title"
                                    onChange={handleOnChangeInput}
                                    value={inputValue.title}
                                    name="title"
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full md:w-auto">
                                <label htmlFor="tags" className="font-bold">Etiqutas</label>
                                <input
                                    value={tag.title}
                                    onChange={handleChangeInputTags}
                                    className="outline-none p-1.5 rounded-md border border-neutral-400"
                                    type="text"
                                    placeholder="Enter tags"
                                    id="tags"
                                />
                                <div className="flex justify-between">
                                    <div className="flex gap-3 items-center">

                                        {tags.length <= 3 ? tags.map((e, index) => (
                                            <div key={index} className="bg-neutral-200 w-auto p-1 rounded-md text-black text-center">
                                                {e}
                                            </div>
                                        )) : ""
                                        }
                                    </div>
                                    <button
                                        type="button"
                                        className="text-blue-700 cursor-pointer"
                                        onClick={handleOnClick}
                                    >
                                        Agregar
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 w-full md:w-auto">
                                <label htmlFor="location" className="font-bold ">Ubicación</label>
                                <input
                                    className="outline-none p-1.5 rounded-md border border-neutral-400"
                                    type="text"
                                    placeholder="Enter location"
                                    id="location"
                                    name="location"
                                    value={inputValue.location}
                                    onChange={handleOnChangeInput}
                                />
                            </div>
                            <div className="flex justify-center  ">

                                <button type="submit" className="w-full  md:w-[50%] text-white bg-blue-600 p-2 rounded-3xl cursor-pointer">
                                    Subir Imagen
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>

    )
}



