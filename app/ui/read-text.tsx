'use client'

import { Text } from '@/app/lib/definitions'
import CancelPage from './admin/cancel'

export default function ReadText({ text }: { text: Text} ) {

    return (
        <>
            <div>
                <p className='text-6xl text-shadow-white mt-30 px-5 text-center'>{text.text}</p>
            </div>
            <CancelPage />
        </>
    )
}