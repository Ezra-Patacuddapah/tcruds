import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!, { ssl: 'require' })

async function listTexts() {
    const data = await sql`
        SELECT texts.text
        FROM texts
    `

    return data
}

export async function GET() {
    try {
        return Response.json(await listTexts())
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}