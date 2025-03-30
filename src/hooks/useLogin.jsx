import { useState, useEffect } from "react";

export const useLogin = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogin(true);

        }
    }, []);

    return { isLogin };
};