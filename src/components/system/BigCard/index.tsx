import { AiFillForward } from 'react-icons/ai'
import CardDescription from '../CardDescription'
import { IPost } from '@/types/post'
import Image from 'next/image'

interface IBigCardProps {
    post: IPost
}

function BigCard({ post }: IBigCardProps): JSX.Element {
    return (
        <div className='bg-white grid grid-cols-2 h-[350px]'>
            <div className='relative'>
                <Image
                    alt={post.title + ' image'}
                    fill
                    src={post.image}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className='flex items-center relative'>
                <CardDescription
                    authorName={post.author.name}
                    content={post.content}
                    title={post.title}
                />
                <AiFillForward className='absolute right-3 bottom-3 h-6 w-6 text-primary-brand-color' />
            </div>
        </div>
    )
}

export default BigCard
