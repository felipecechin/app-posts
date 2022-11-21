import Header from '@/components/shared/template/Header'
import MainContent from '@/components/shared/template/MainContent'
import { useState } from 'react'

export default function PostsPage(): JSX.Element {
    const [posts, setPosts] = useState(Array.from({ length: 20 }))

    return (
        <>
            <Header />
            <MainContent>
                <div className='max-w-5xl mx-auto h-full'>
                    <div className='grid grid-cols-6 gap-y-4 mt-4 h-full overflow-auto'>
                        {Array.from({ length: 30 }).map((_, index) => {
                            if (index === 0 || index % 6 === 0) {
                                return (
                                    <div className='col-start-1 col-end-4 bg-gray-200' key={index}>
                                        {index}
                                    </div>
                                )
                            }
                            if (index % 6 === 1) {
                                return (
                                    <div className='col-start-4 col-end-7 bg-gray-200' key={index}>
                                        {index}
                                    </div>
                                )
                            }
                            if (index % 6 === 2) {
                                return (
                                    <div className='col-start-3 col-span-4 bg-gray-200' key={index}>
                                        {index}
                                    </div>
                                )
                            }
                            if (index % 6 === 3) {
                                return (
                                    <div className='col-start-1 col-end-4 bg-gray-200' key={index}>
                                        {index}
                                    </div>
                                )
                            }
                            if (index % 6 === 4) {
                                return (
                                    <div className='col-start-4 col-end-7 bg-gray-200' key={index}>
                                        {index}
                                    </div>
                                )
                            }
                            if (index % 6 === 5) {
                                return (
                                    <div className='col-start-1 col-end-5 bg-gray-200' key={index}>
                                        {index}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </MainContent>
        </>
    )
}
