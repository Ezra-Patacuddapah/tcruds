import { fetchTexts } from '../lib/data'
import { Text } from '../lib/definitions'

export default async function Table() {
    const texts = await fetchTexts()

    texts.map(i => console.log(i.text))

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