'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce'
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useState, useCallback } from 'react'

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const queryFromUrl = searchParams.get('query')?.toString() || ''
    const [inputValue, setInputValue] = useState<string>(queryFromUrl)
    
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', '1')
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
        handleSearch(value)
    }

    const handleClear = useCallback(() => {
        setInputValue('')
        const params = new URLSearchParams(searchParams)
        params.delete('query')
        params.set('page', '1')
        replace(`${pathname}?${params.toString()}`)
    }, [pathname, replace, searchParams])

    return (
        <div className="flex justify-center items-center mt-1">
            <div className="relative w-70 md:w-100">
                <input
                    onChange={handleInputChange}
                    value={inputValue}
                    placeholder={placeholder}
                    className='px-2 md:p-2 w-70 md:w-100 border border-blue-300 rounded-md md:text-xl my-1'
                />
                {inputValue && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-100 hover:text-gray-100 cursor-pointer"
                        aria-label="Clear search"
                    >
                        <XMarkIcon className="w-5 h-5 bg-gray-800" />
                    </button>
                )}
            </div>
            
        </div>
    )
}