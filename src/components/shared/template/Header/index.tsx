import Link from 'next/link'
import ModalContactForm from '@/components/system/ModalContactForm'
import { useState } from 'react'

function Header(): JSX.Element {
    const [showContactModal, setShowContactModal] = useState(false)

    return (
        <header className='w-full bg-[#2D2D2D] px-4 py-4 fixed top-0 z-10'>
            <div className='max-w-4xl flex flex-row mx-auto text-white font-bold items-center'>
                <span className='flex-grow'>
                    <h1 className='text-lg sm:text-2xl'>
                        <Link href='/'>Blog</Link>
                    </h1>
                </span>
                <span>
                    <Link
                        className='text-sm sm:text-lg'
                        href='/'
                    >
                        Posts
                    </Link>
                </span>
                <span className='text-sm sm:text-lg ml-4 sm:ml-20'>
                    <button onClick={() => setShowContactModal(true)}>Contact</button>
                </span>
            </div>
            <ModalContactForm
                onClose={() => setShowContactModal(false)}
                open={showContactModal}
            />
        </header>
    )
}

export default Header
