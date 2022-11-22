import { AiFillForward } from 'react-icons/ai'
import CardDescription from '../CardDescription'
import { IPost } from '@/types/post'
import Image from 'next/image'
import { useMemo } from 'react'

interface ISmallCardProps {
    post: IPost
    imagePosition: 'left' | 'right'
}

function SmallCard({ post, imagePosition }: ISmallCardProps): JSX.Element {
    const divImage = useMemo(() => {
        return (
            <div className='hidden sm:block sm:relative'>
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
        <div className='bg-white grid grid-cols-1 sm:grid-cols-3 h-[200px] relative'>
            {imagePosition === 'left' && divImage}
            <div className='sm:col-span-2 flex items-center relative'>
                <CardDescription
                    authorName={post.author.name}
                    content={post.content}
                    title={post.title}
                />
                <AiFillForward className='absolute right-3 bottom-3 h-6 w-6 text-primary-brand-color' />
            </div>
            {imagePosition === 'right' && divImage}
        </div>
    )
}

export default SmallCard
