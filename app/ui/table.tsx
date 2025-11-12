import { Text } from '../lib/definitions';
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
                </div>
            ))}
        </div>
    )
}