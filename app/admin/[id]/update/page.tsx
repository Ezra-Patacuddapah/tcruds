import Form from '@/app/ui/admin/update-form'
import { fetchTextById } from '@/app/lib/data'

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params
    const id = params.id
    const text = await fetchTextById(id)
    return (
        <main>
            <Form text={text} />
        </main>
    )
}