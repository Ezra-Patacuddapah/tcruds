'use client'

import { Button } from '@/app/ui/button'
import { createBlog } from "@/app/lib/actions"
import { useActionState } from "react"

export default function Form() {
    return (
        <form action={createBlog}>
            <input type="text" name="title" id="title" />
            <textarea name="description" id="description"></textarea>
            <Button type="submit">Create Blog</Button>
        </form>
    )
}
