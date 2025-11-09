import { Metadata } from 'next'
import Table from '../ui/admin/table'

export const metadata: Metadata = {
    title: "Admin"
}

export default function Page() {
    return (
        <div>
            <h1>Blogs</h1>
            <Table />
        </div>
    )
}