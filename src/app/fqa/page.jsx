

import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { SingleQuestion } from "@/components/SingleQuestio/SingleQuestio"

const data = [
    {
        id: 1,
        question: "¿Qué es Esfrar?",
        answer: "Esfrar es una plataforma digital que te permite subir, buscar y poder descargar imágenes de forma totalmente gratuita.",
    },
    {
        id: 2,
        question: "¿Es necesario registrarse para usar Esfrar?",
        answer: "No, puedes buscar y descargar imágenes sin necesidad de registrarte. Sin embargo, registrarte te permite acceder a funciones adicionales.",
    },
    {
        id: 3,
        question: "¿Puedo usar las imágenes de Esfrar con fines comerciales?",
        answer: "Sí, todas las imágenes en Esfrar están bajo licencia libre y pueden ser utilizadas para fines personales y comerciales sin restricciones.",
    },
    {
        id: 4,
        question: "¿Cómo puedo contribuir con imágenes a Esfrar?",
        answer: "Puedes subir tus imágenes creando una cuenta y siguiendo las instrucciones en la sección de contribuciones dentro de la plataforma.",
    },
]


export default function FQA() {
    return (
        <>
            <Header />
            <div className="m-30 flex flex-col gap-20 ">

                <h2 className="text-center text-5xl font-bold">Preguntas frecuentes</h2>
                <main className="w-auto mx-10 lg:w-[80%] lg:mx-auto flex flex-col lg:items-center gap-10  ">
                    {data.map((e) => (
                        <SingleQuestion key={e.id} question={e.question}
                            answer={e.answer} />
                    ))}
                </main>
            </div>

            <Footer />
        </>
    )
}

