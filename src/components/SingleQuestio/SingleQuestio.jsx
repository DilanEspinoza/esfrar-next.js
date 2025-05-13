"use client";

import { useState } from "react"
import { PlusIcon } from "../icons/PlusIcon";
import { MinusIcon } from "../icons/MinusIcon";


export const SingleQuestion = ({ question, answer }) => {
    const [btnQuestion, setBtnQuestion] = useState(false)

    const handleClickBtnQuestion = () => {
        setBtnQuestion(!btnQuestion)
    }



    return (

        <div className="w-full  lg:w-[80%] flex gap-5 flex-col lg:justify-between lg:gap-5 lg:shadow-green-500 shadow-lg lg:border-t border border-l rounded-2xl bg-neutral-100  p-5 ">
            <div
                className=" text-2xl flex justify-between items-center cursor-pointer"
                onClick={handleClickBtnQuestion}>
                <h2 className="font-medium">{question}</h2>

                <div className="hidden lg:block">

                    {btnQuestion === true ? <MinusIcon /> : <PlusIcon />}
                </div>


            </div>
            <div className="">

                {btnQuestion && <p className={``}>{answer}</p>}
            </div>
            <div className="block lg:hidden  justify-center">

                <button className="cursor-pointer text-indigo-400 hover:text-indigo-500 p-2.5 rounded-xl" onClick={handleClickBtnQuestion}>
                    {!btnQuestion ? "Mostrar" : "Ocultar"}
                </button>
            </div>
        </div>
    )
}
/* 
SingleQuestion.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
}

 */