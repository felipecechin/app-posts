import { GetServerSideProps } from 'next'
import Header from '@/components/shared/template/Header'
import { IPost } from '@/types/post'
import Image from 'next/image'
import MainContent from '@/components/shared/template/MainContent'
import dayjs from 'dayjs'
import fetcher from '@/utils/fetcher'
import { useMemo } from 'react'

interface IPostPageProps {
    post: IPost
}

export default function PostPage({ post }: IPostPageProps): JSX.Element {
    const formatDate = useMemo(() => {
        const dateString = post.createdAt
        const formattedDate = dateString.split('T')[0]
        return dayjs(formattedDate).format('MMM D, YYYY')
    }, [post])

    const divImage = useMemo(() => {
        return (
            <div className='relative w-full h-[350px] sm:h-full'>
                <Image
                    alt={post.title + ' image'}
                    fill
                    src={post.image}
                    style={{ objectFit: 'cover' }}
                />
            </div>
        )
    }, [post])

    return (
        <>
            <Header />
            <MainContent>
                <div className='max-w-4xl mx-auto h-full bg-white mt-4'>
                    <article className='flex flex-col'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 sm:h-[350px]'>
                            {divImage}
                            <div className='flex flex-col justify-center px-10 sm:px-20 pt-10 sm:pt-0 space-y-6'>
                                <p className='text-primary-brand-color text-sm'>{formatDate}</p>
                                <p className='text-text-color'>{post.author.name}</p>
                                <h2 className='text-text-gradient text-xl font-bold'>{post.title}</h2>
                            </div>
                        </div>
                        <div className='px-10 sm:px-32 py-20'>
                            <p
                                className='text-text-color'
                                dangerouslySetInnerHTML={{
                                    __html: post.content,
                                }}
                            ></p>
                        </div>
                    </article>
                </div>
            </MainContent>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{ post: IPost }> = async ({ params }) => {
    if (!params || !params.post) {
        return {
            notFound: true,
        }
    }
    const post: IPost = await fetcher({
        url: '/api/posts/' + params.post,
        method: 'GET',
    })

    return {
        props: {
            post,
        },
    }
}
