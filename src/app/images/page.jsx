// app/images/page.jsx (o .tsx)

"use client"

import { Suspense } from "react"
import ImagesPageClient from "./ImagesPageClient"

export default function ImagesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ImagesPageClient />
        </Suspense>
    )
}
