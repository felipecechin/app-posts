import Link from 'next/link'

export default function Page500(): JSX.Element {
    return (
        <>
            <div className='flex min-h-full flex-col pt-16 pb-12'>
                <main className='mx-auto flex w-full max-w-5xl bg-white rounded-lg flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
                    <div className='py-16'>
                        <div className='text-center'>
                            <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                                Oops! A página que você está tentando acessar não existe.
                            </h1>
                            <Link
                                className='border border-black rounded-md px-4 py-2 mt-6 inline-block'
                                href='/'
                            >
                                Clique aqui para voltar para a página inicial.
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
