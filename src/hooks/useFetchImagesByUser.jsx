import axios from "axios";
import { useEffect, useState } from "react";


export default function useFetchImagesByUser(user_id) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!user_id) return;

    const fetchImages = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/images/users/user?user_id=${user_id}`);
        console.log(res.data)
        setData(res.data);
      } catch (error) {
        console.error("Error al obtener imágenes:", error);
        setError("Error al obtener imágenes:")
      }
    };

    fetchImages();
  }, [user_id]);

  return ({
    data, error
  }
  );
}
