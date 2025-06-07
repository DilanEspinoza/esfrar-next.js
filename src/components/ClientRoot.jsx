"use client";

import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import { ToastContainer } from "react-toastify";

export default function ClientRoot({ children }) {
    const [showSplash, setShowSplash] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem("visited");

        if (!visited) {
            setShowSplash(true);
            localStorage.setItem("visited", "true");

            const splashTimer = setTimeout(() => {
                setFadeOut(true);
            }, 2500);

            const fadeTimer = setTimeout(() => {
                setShowSplash(false);
                setAppReady(true);
            }, 2500 + 700); // splash + fadeOut

            return () => {
                clearTimeout(splashTimer);
                clearTimeout(fadeTimer);
            };
        } else {
            setAppReady(true);
        }
    }, []);

    return (
        <>
            {showSplash && <SplashScreen isVisible={!fadeOut} className="hidden" />}
            {appReady && children}
            <ToastContainer position='bottom-right' autoClose={4000} />
        </>
    );
}
