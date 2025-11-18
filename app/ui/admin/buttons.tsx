import Link from 'next/link'
import { deleteText } from '@/app/lib/actions'
import { PlusCircleIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

export function Create() {
    return (
        <Link
            href="/admin/create"
        >
            <button
                type='submit'
                className='fixed bottom-1 right-1'
            >
                <PlusCircleIcon className='w-8 h-8' />
            </button>
        </Link>
    )
}

export function Update({ id }: { id: string }) {
    return (
        <Link
            href={`/admin/${id}/update`}
        >
            <button 
                type='submit'
            >
                <PencilSquareIcon className='w-5 h-5' />
            </button>
        </Link>
    )
}

export function Delete({ id }: { id: string }) {
    const deleteTextWithId = deleteText.bind(null, id)
    return (
        <form action={deleteTextWithId}>
            <button 
                type='submit'
            >
                <TrashIcon className='w-5 h-5' />
            </button>
        </form>
    )
}