import { useEffect } from "react"

export const useAsync = (asyncFn,
    successFunction,
    returnFuntion,
    dependencies
) => {
    useEffect(() => {
        let isActive = true
        asyncFn().then((result) => {
            if (isActive) successFunction(result.data)
        })
        return () => {
            returnFuntion && returnFuntion()
            isActive = false
        }
    }, dependencies)
}