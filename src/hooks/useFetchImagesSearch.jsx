import { useState, useEffect } from "react";
import axios from "axios"; // o fetch si prefieres

const useFetchImagesSearch = (search, page = 1, limit = 10) => {

  const [loading, setLoading] = useState(true); // Para mostrar carga
  const [data, setData] = useState([])
  // Función para obtener imágenes desde la API

  // Efecto para hacer la llamada cuando cambia la búsqueda o la página
  useEffect(() => {
    const getImages = async () => {


      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/images/search?search=${search}&page=${page}&limit=${limit}`,);
        setData(res.data)
        setLoading(false)
      } catch (error) {
        console.error("Error al obtener las imágenes", error);
        setLoading(false)
      }
    };


    getImages();
  }, [search, page]);



  return {
    data,
    loading
  };
};

export default useFetchImagesSearch;
