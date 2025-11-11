import postgres from 'postgres'
import { Text } from './definitions'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

export async function fetchTexts() {
    try {
        const data = await sql<Text[]>`
            SELECT texts.id, texts.text
            FROM texts
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