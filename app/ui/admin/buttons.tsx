import Link from 'next/link'
import { deleteText } from '@/app/lib/actions'

export function Create() {
    return (
        <Link
            href="/admin/create"
        >
            Create
        </Link>
    )
}

export function Update({ id }: { id: string }) {
    return (
        <Link
            href={`/admin/${id}/update`}
        >
            Update
        </Link>
    )
}

export function Delete({ id }: { id: string }) {
    const deleteTextWithId = deleteText.bind(null, id)
    return (
        <form action={deleteTextWithId}>
            <button type="submit">Delete</button>
        </form>
    )
}