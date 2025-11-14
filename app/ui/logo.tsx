'use client'

import Image from "next/image"

export default function Logo() {
    return (
        <Image src='/gear.png' className="bg-gray-600 animate-spin fixed top-0 left-0 duration-2000" alt="Ezra Logo" width={15} height={15} />
    )
}