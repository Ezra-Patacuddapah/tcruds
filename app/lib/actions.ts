'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

const FormSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
})

const CreateBlog = FormSchema.omit({ id: true })

export type State = {
    errors?: {
        title?: string[];
        string?: string[];
    }
}

export async function createBlog(formData: FormData) {
    const { title, description } = CreateBlog.parse({
        title: formData.get('title'),
        description: formData.get('description'),
    })

    await sql`
        INSERT INTO blogs (title, description)
        VALUES (${title}, ${description})
    `

    revalidatePath('/admin')
    redirect('/admin')
}
