import { AiFillForward } from 'react-icons/ai'
import CardDescription from '../CardDescription'
import { IPost } from '@/types/post'
import Image from 'next/image'
import Link from 'next/link'

interface IBigCardProps {
    post: IPost
}

function BigCard({ post }: IBigCardProps): JSX.Element {
    return (
        <Link
            className='block border border-transparent hover:border-black hover:shadow-xl'
            href={'/' + post.id}
        >
            <div
                className='bg-white grid grid-cols-1 sm:grid-cols-2 h-[200px] sm:h-[350px]'
                role={'button'}
            >
                <div className='hidden sm:block sm:relative'>
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
        </Link>
    )
}

export default BigCard
