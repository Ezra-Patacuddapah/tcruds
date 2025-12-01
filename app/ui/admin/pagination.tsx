'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { generatePagination } from '@/app/lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', pageNumber.toString())
        return `${pathname}?${params.toString()}`
    }

    const allPages = generatePagination(currentPage, totalPages)

    return (
        <>
            <div className='flex justify-center items-center md:fixed bottom-10 left-0 right-0 py-10'>
                <PaginationNav
                    direction='left'
                    href={createPageURL(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />
            

                <div className='flex -space-x-px'>
                    {allPages.map((page, index) => {
                        let position: 'first' | 'last' | 'single' | 'middle' | undefined

                        if (index === 0) position = 'first'
                        if (index === allPages.length - 1) position = 'last'
                        if (allPages.length === 1) position = 'single'
                        if (page === '...') position = 'middle'

                        return (
                            <PaginationNumber
                                key={`${page}-${index}`}
                                href={createPageURL(page)}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        )
                    })}
                </div>

            
                <PaginationNav
                    direction='right'
                    href={createPageURL(currentPage + 1)}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </>
    )
}

function PaginationNumber({
    page,
    href,
    isActive,
    position,
}: {
    page: number | string;
    href: string;
    isActive: boolean;
    position?: 'first' | 'last' | 'middle' | 'single';
}) {
    const className = clsx(
        'flex w-9 h-9 justify-center items-center text-sm bg-gray-600 border border-blue-400 text-blue-400 md:text-lg',
        {
            'rounded-l-md': position === 'first' || position === 'single',
            'rounded-r-md': position === 'last' || position === 'single',
            'z-10 bg-gray-900': isActive,
            'hover:bg-gray-800': !isActive && position !== 'middle',
            'text-blue-400': position === 'middle',
        }
    )

    return isActive || position === 'middle' ? (
        <div className={className}>{page}</div>
    ) : (
        <Link href={href} className={className}>
            {page}
        </Link>
    )
}

function PaginationNav ({
    href,
    direction,
    isDisabled,
}: {
    href: string;
    direction: 'left' | 'right';
    isDisabled: boolean;
}) {
    const className = clsx(
        'rounded-md flex justify-center p-1 items-center text-sm md:bg-gray-600  text-blue-400 md:text-lg',
        {
            'pointer-events-none invisible': isDisabled,
            'hover:bg-gray-900 text-blue-400': !isDisabled,
            'mr-2 md:mr-1': direction === 'left',
            'ml-2 md:ml-1': direction === 'right',
        }
    )

    const navBtn = 
        direction === 'left' ? (
            <button className='flex justify-center items-center cursor-pointer md:pr-2'>
                <ChevronLeftIcon className='w-5 h-5 md:w-7 md:h-7 md:pr-1' />
                <span className="hidden md:block">Previous</span>
            </button>
        ) : (
            <button className='flex justify-center items-center cursor-pointer md:pl-2'>
                <span className="hidden md:block">Next</span>
                <ChevronRightIcon className='w-5 h-5 md:w-7 md:h-7 md:pl-1' />
            </button>
        )

    return isDisabled ? (
        <div className={className}>{navBtn}</div>
    ) : (
        <Link href={href} className={className}>
            {navBtn}
        </Link>
    )
}
