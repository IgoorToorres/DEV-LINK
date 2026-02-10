import { FileQuestion, Search } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='min-h-screen flex items-center justify-center px-4 flex-col'>
            <div className='max-w-md w-full text-center'>
                <FileQuestion
                    size={64}
                    className='text-bg mx-auto mb-6'
                />
            </div>

            <div className='relative inline-block mb-3 font-sans'>
                <span className='text-8xl font-bold text-bg inline-block transform -rotate-12 -translate-y-2 translate-x-1'>4</span>
                <span className='text-8xl font-bold text-bg inline-block'>0</span>
                <span className='text-8xl font-bold text-bg inline-block transform rotate-12 -translate-y-2 translate-x-1'>4</span>
            </div>

            <p className='text-text mb-8'>Página não encontrada</p>

        </div>
    )
}