function Header(): JSX.Element {
    return (
        <header className='w-full bg-[#2D2D2D] px-4 py-4 fixed top-0'>
            <div className='max-w-4xl flex flex-row mx-auto text-white font-bold items-center'>
                <span className='flex-grow'>
                    <h1 className='text-lg sm:text-2xl'>
                        Rockr Blog
                    </h1>
                </span>
                <span>
                    <a className='text-sm sm:text-lg'
                    >
                        Posts
                    </a>
                </span>
                <span className='text-sm sm:text-lg ml-4 sm:ml-20'>
                    <button>
                        Contact
                    </button>
                </span>
            </div>
        </header>
    )
}

export default Header