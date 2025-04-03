
export const ImageDownloader = ({ imageUrl, fileName }) => {
    const handleDownload = async () => {
        try {
            // Descargar la imagen como un Blob
            const response = await fetch(imageUrl);
            const blob = await response.blob();

            // Crear una URL temporal para el Blob
            const url = URL.createObjectURL(blob);

            // Crear un enlace dinámico para descargar la imagen
            const link = document.createElement("a");
            link.href = url;
            link.download = fileName || "imagen_descargada.jpg";
            link.click();

            // Liberar la URL temporal
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error al descargar la imagen:", error);
        }
    };

    return (
        <div className=" p-4">

            <button
                onClick={handleDownload}
                className="w-full py-2 px-5 rounded-3xl border text-white bg-emerald-400 hover:bg-emerald-500  cursor-pointer"
            >
                Descargar Imagen
            </button>
        </div>
    );
};
