'use client'

import { Button } from '@/app/ui/button'
import { createText } from "@/app/lib/actions"

export default function Form() {
    return (
        <form action={createText}>
            <input type="text" name="text" id="text" />
            <Button type="submit">Create</Button>
        </form>
    )
}
