import { Metadata } from 'next'
import Table from '../ui/admin/table'
import { Create } from '../ui/admin/buttons'

export const metadata: Metadata = {
    title: "Admin"
}

export default function Page() {
    return (
        <div>
            <Create />
            <Table />
        </div>
    )
}