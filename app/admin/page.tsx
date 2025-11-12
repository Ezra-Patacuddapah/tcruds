import { Metadata } from 'next'
import Table from '../ui/admin/table'
import { Create } from '../ui/admin/buttons'
import Search from '../ui/search'

export const metadata: Metadata = {
    title: "Admin"
}

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>
}) {
    const searchParams = await props.searchParams
    const query = searchParams?.query || ''

    return (
        <div>
            <Create />
            <Search placeholder='Search...'/>
            <Table query={query} />
        </div>
    )
}