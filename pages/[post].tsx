import { GetServerSideProps } from 'next'
import Header from '@/components/shared/template/Header'
import { IPost } from '@/types/post'
import Image from 'next/image'
import MainContent from '@/components/shared/template/MainContent'
import dayjs from 'dayjs'
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
                            <p className='text-text-color'>{post.content}</p>
                        </div>
                    </article>
                </div>
            </MainContent>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<{ post: IPost }> = async ({ params }) => {
    console.log(params)
    const post = {
        id: 1,
        author: { name: 'Sheila C. Boyd' },
        title: 'I hope the dog doesn slobber on me.',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod vestibulum erat vulputate semper. Fusce consequat lobortis mi. Donec eu orci lectus. Aenean leo arcu, sollicitudin id interdum at, sagittis egestas ante. Aliquam erat volutpat. Phasellus lobortis risus in augue bibendum, at aliquet metus consequat. Mauris venenatis dictum nisl ac congue. Etiam non quam dictum, imperdiet lectus at, gravida massa. Vivamus mattis nibh massa, vitae blandit neque tincidunt quis. In malesuada lacus a ultrices luctus. Ut lacinia enim sed libero lobortis, vitae tempus erat laoreet. Integer commodo odio pulvinar diam faucibus, vitae venenatis tellus vulputate. Sed rutrum leo nisi, a blandit elit semper id. Suspendisse at bibendum lacus, nec gravida purus. Duis vehicula faucibus diam et mattis. In bibendum nisi in leo efficitur, nec venenatis justo cursus. Nulla eget lectus diam. Nunc ex nulla, facilisis a convallis eu, dictum vitae libero. Nam rutrum commodo lectus, sed auctor nisi porttitor ac. Donec maximus, tellus nec tincidunt porttitor, lacus sapien pellentesque turpis, ut tempor enim dolor a felis. Vivamus maximus hendrerit egestas. Sed vel nunc dictum, lobortis purus at, iaculis erat. Pellentesque at quam non neque euismod pulvinar sit amet sit amet arcu. Fusce at iaculis mi, in semper nisi. Fusce lacus metus, commodo vel enim sed, posuere convallis leo. Ut auctor enim eu turpis semper, ac auctor orci efficitur. Morbi facilisis odio erat, et imperdiet elit luctus eget. Duis diam metus, bibendum sit amet placerat at, tincidunt sollicitudin velit.',
        image: 'https://sample-posts-frontend-test.s3.amazonaws.com/post_1.jpg',
        createdAt: '2022-04-17T16:39:02Zz',
    }

    return {
        props: {
            post,
        },
    }
}
