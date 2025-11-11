'use-client'

import { Button } from '../button'
import { updateText } from '@/app/lib/actions'
import { Text } from '@/app/lib/definitions'

export default function UpdateTextForm({ text }: { text: Text} ) {
    const updateTextWithId = updateText.bind(null, text.id)
    return (
        <form action={updateTextWithId}>
            <input type="text" name="text" id="text" defaultValue={text.text} />
            <Button type="submit">Update</Button>
        </form>
    )
}