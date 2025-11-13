'use-client'

import { Button } from '../button'
import { updateText } from '@/app/lib/actions'
import { Text } from '@/app/lib/definitions'
import Link from 'next/link'

export default function UpdateTextForm({ text }: { text: Text} ) {
    const updateTextWithId = updateText.bind(null, text.id)
    return (
        <form action={updateTextWithId} className='flex justify-center items-center'>
            <input type="text" name="text" id="text" defaultValue={text.text} className='pl-2 border border-white rounded-l-md' />
            <Link
                href='/admin'
                className='bg-gray-600 p-1'
            >
                Cancel
            </Link>
            <Button type="submit">Update</Button>
        </form>
    )
}