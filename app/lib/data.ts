import postgres from 'postgres'
import { Text } from './definitions'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

export async function fetchTexts() {
    try {
        const data = await sql<Text[]>`
            SELECT texts.id, texts.text
            FROM texts
            ORDER BY texts.id DESC
        `
        return data
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch the texts.')
    }
}

export async function fetchTextById(id: string) {
    try {
        const data = await sql<Text[]>`
            SELECT texts.id,
            texts.text
            FROM texts
            WHERE texts.id = ${id};
        `
        const text = data.map(text => ({
            ...text
        }))
        return text[0]
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch text.')
    }
}

export async function fetchFilteredTexts(query: string) {
    try {
        const texts = await sql<Text[]>`
            SELECT
            texts.id,
            texts.text
            FROM texts
            WHERE 
            texts.text::text ILIKE ${`%${query}%`}
            ORDER BY texts.id DESC
        `

        return texts
    } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch texts.')
    }
}