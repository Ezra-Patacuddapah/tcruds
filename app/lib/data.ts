import postgres from 'postgres'
import { Blog } from './definitions'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

export async function fetchBlogs() {
    try {
        const data = await sql<Blog[]>`
            SELECT blogs.title, blogs.description
            FROM blogs
        `
        return data
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch the blogs.')
    }
}