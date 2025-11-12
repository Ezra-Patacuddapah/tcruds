import Table from "./ui/table"
import Search from "./ui/search"

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
            <Search />
            <Table query={query} />
        </div>
    )
}