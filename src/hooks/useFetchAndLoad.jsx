
import { useState, useEffect } from "react"

export const useFetchAndLoad = () => {
    const [loading, setLoading] = useState(false)
    let controller

    const callEndPoint = async (axiosCall) => {
        if (axiosCall.controller) controller = axiosCall.controler
        setLoading(true)

        let result = {}
        try {
            result = await axiosCall.call
        } catch (error) { }
        setLoading(false)
        return result
    }

    const cancelEndPoint = () => {
        setLoading(false)
        controller && controller.abort()
    }

    useEffect(() => {
        return () => {
            cancelEndPoint()
        }
    }, [])

    return { loading, callEndPoint }
}