// import { fetchTexts } from "@/app/lib/data" // Just Read without a filter
import { Text } from '../../lib/definitions'
import { Update, Delete } from './buttons'
import { fetchFilteredTexts } from "@/app/lib/data";

export default async function Table({
    query
}: {
    query: string;
}) {
    const texts = await fetchFilteredTexts(query)

    texts.map(i => console.log(i.id))

    return (
        <div>
            {texts?.map((text:Text) => (
                <div key={text.id} className="flex justify-center items-center">
                    <p className="text-2xl">{text.text}</p>
                    <Update id={text.id} />
                    <Delete id={text.id} />
                </div>
            ))}
        </div>
    )
}