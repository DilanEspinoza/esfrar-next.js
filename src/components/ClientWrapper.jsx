"use client";

import { UserProvider } from "@/context/UserContext";

export default function ClientWrapper({ children }) {
    return <UserProvider>{children}</UserProvider>;
}