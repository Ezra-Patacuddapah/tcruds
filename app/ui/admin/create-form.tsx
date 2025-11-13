'use client'

import { Button } from '@/app/ui/button'
import { createText } from "@/app/lib/actions"
import Link from 'next/link'

export default function Form() {
    return (
        <form action={createText} className='flex justify-center items-center'>
            <input type="text" name="text" id="text" className='pl-2 border border-white rounded-l-md' />
            <Link
                href='/admin'
                className='bg-gray-600 p-1'
            >
                Cancel
            </Link>
            <Button type="submit">Create</Button>
        </form>
    )
}
