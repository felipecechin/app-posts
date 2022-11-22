import BigCard from '@/components/system/BigCard'
import Header from '@/components/shared/template/Header'
import { IPost } from '@/types/post'
import InfiniteScroll from 'react-infinite-scroll-component'
import MainContent from '@/components/shared/template/MainContent'
import React from 'react'
import SmallCard from '@/components/system/SmallCard'

export default function PostsPage(): JSX.Element {
    // const [posts, setPosts] = useState(Array.from({ length: 40 }))
    const posts: IPost[] = [
        {
            id: 1,
            author: { name: 'Sheila C. Boyd' },
            title: 'I hope the dog doesn slobber on me.',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod vestibulum erat vulputate semper. Fusce consequat lobortis mi. Donec eu orci lectus. Aenean leo arcu, sollicitudin id interdum at, sagittis egestas ante. Aliquam erat volutpat. Phasellus lobortis risus in augue bibendum, at aliquet metus consequat. Mauris venenatis dictum nisl ac congue. Etiam non quam dictum, imperdiet lectus at, gravida massa. Vivamus mattis nibh massa, vitae blandit neque tincidunt quis. In malesuada lacus a ultrices luctus. Ut lacinia enim sed libero lobortis, vitae tempus erat laoreet. Integer commodo odio pulvinar diam faucibus, vitae venenatis tellus vulputate. Sed rutrum leo nisi, a blandit elit semper id. Suspendisse at bibendum lacus, nec gravida purus. Duis vehicula faucibus diam et mattis. In bibendum nisi in leo efficitur, nec venenatis justo cursus. Nulla eget lectus diam. Nunc ex nulla, facilisis a convallis eu, dictum vitae libero. Nam rutrum commodo lectus, sed auctor nisi porttitor ac. Donec maximus, tellus nec tincidunt porttitor, lacus sapien pellentesque turpis, ut tempor enim dolor a felis. Vivamus maximus hendrerit egestas. Sed vel nunc dictum, lobortis purus at, iaculis erat. Pellentesque at quam non neque euismod pulvinar sit amet sit amet arcu. Fusce at iaculis mi, in semper nisi. Fusce lacus metus, commodo vel enim sed, posuere convallis leo. Ut auctor enim eu turpis semper, ac auctor orci efficitur. Morbi facilisis odio erat, et imperdiet elit luctus eget. Duis diam metus, bibendum sit amet placerat at, tincidunt sollicitudin velit.',
            image: 'https://sample-posts-frontend-test.s3.amazonaws.com/post_1.jpg',
            createdAt: '2022-04-17T16:39:02Zz',
        },
        {
            id: 2,
            author: { name: 'Noah McCann' },
            title: 'What are you looking for?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl felis, vehicula eget imperdiet vitae, scelerisque auctor magna. Maecenas ullamcorper, nunc eu sollicitudin luctus, mauris velit tincidunt enim, quis sollicitudin dolor sem ac ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dignissim, lectus non tincidunt sollicitudin, nunc sapien sodales augue, sit amet tempor nulla orci et purus. Fusce eu finibus orci, non facilisis ligula. Sed vel libero pharetra, faucibus justo id, ullamcorper diam. Donec magna augue, gravida vel semper non, auctor eu quam. Duis id dui ullamcorper, sodales ligula ut, tempus urna. Phasellus vestibulum sapien ac justo aliquam, vel feugiat arcu pellentesque. Mauris orci lectus, ultrices eu libero a, tincidunt auctor est. Morbi pellentesque condimentum mi in convallis. Nullam molestie justo imperdiet rutrum ornare. Sed et vestibulum velit, venenatis elementum augue.',
            image: 'https://sample-posts-frontend-test.s3.amazonaws.com/post_2.jpg',
            createdAt: '2022-07-11T21:02:37Zz',
        },
        {
            id: 3,
            author: { name: 'Noah McCann' },
            title: 'What are you looking for?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl felis, vehicula eget imperdiet vitae, scelerisque auctor magna. Maecenas ullamcorper, nunc eu sollicitudin luctus, mauris velit tincidunt enim, quis sollicitudin dolor sem ac ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dignissim, lectus non tincidunt sollicitudin, nunc sapien sodales augue, sit amet tempor nulla orci et purus. Fusce eu finibus orci, non facilisis ligula. Sed vel libero pharetra, faucibus justo id, ullamcorper diam. Donec magna augue, gravida vel semper non, auctor eu quam. Duis id dui ullamcorper, sodales ligula ut, tempus urna. Phasellus vestibulum sapien ac justo aliquam, vel feugiat arcu pellentesque. Mauris orci lectus, ultrices eu libero a, tincidunt auctor est. Morbi pellentesque condimentum mi in convallis. Nullam molestie justo imperdiet rutrum ornare. Sed et vestibulum velit, venenatis elementum augue.',
            image: 'https://sample-posts-frontend-test.s3.amazonaws.com/post_2.jpg',
            createdAt: '2022-07-11T21:02:37Zz',
        },
        {
            id: 4,
            author: { name: 'Noah McCann' },
            title: 'What are you looking for?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl felis, vehicula eget imperdiet vitae, scelerisque auctor magna. Maecenas ullamcorper, nunc eu sollicitudin luctus, mauris velit tincidunt enim, quis sollicitudin dolor sem ac ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dignissim, lectus non tincidunt sollicitudin, nunc sapien sodales augue, sit amet tempor nulla orci et purus. Fusce eu finibus orci, non facilisis ligula. Sed vel libero pharetra, faucibus justo id, ullamcorper diam. Donec magna augue, gravida vel semper non, auctor eu quam. Duis id dui ullamcorper, sodales ligula ut, tempus urna. Phasellus vestibulum sapien ac justo aliquam, vel feugiat arcu pellentesque. Mauris orci lectus, ultrices eu libero a, tincidunt auctor est. Morbi pellentesque condimentum mi in convallis. Nullam molestie justo imperdiet rutrum ornare. Sed et vestibulum velit, venenatis elementum augue.',
            image: 'https://sample-posts-frontend-test.s3.amazonaws.com/post_2.jpg',
            createdAt: '2022-07-11T21:02:37Zz',
        },
        {
            id: 5,
            author: { name: 'Noah McCann' },
            title: 'What are you looking for?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl felis, vehicula eget imperdiet vitae, scelerisque auctor magna. Maecenas ullamcorper, nunc eu sollicitudin luctus, mauris velit tincidunt enim, quis sollicitudin dolor sem ac ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dignissim, lectus non tincidunt sollicitudin, nunc sapien sodales augue, sit amet tempor nulla orci et purus. Fusce eu finibus orci, non facilisis ligula. Sed vel libero pharetra, faucibus justo id, ullamcorper diam. Donec magna augue, gravida vel semper non, auctor eu quam. Duis id dui ullamcorper, sodales ligula ut, tempus urna. Phasellus vestibulum sapien ac justo aliquam, vel feugiat arcu pellentesque. Mauris orci lectus, ultrices eu libero a, tincidunt auctor est. Morbi pellentesque condimentum mi in convallis. Nullam molestie justo imperdiet rutrum ornare. Sed et vestibulum velit, venenatis elementum augue.',
            image: 'https://sample-posts-frontend-test.s3.amazonaws.com/post_2.jpg',
            createdAt: '2022-07-11T21:02:37Zz',
        },
        {
            id: 6,
            author: { name: 'Noah McCann' },
            title: 'What are you looking for?',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl felis, vehicula eget imperdiet vitae, scelerisque auctor magna. Maecenas ullamcorper, nunc eu sollicitudin luctus, mauris velit tincidunt enim, quis sollicitudin dolor sem ac ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dignissim, lectus non tincidunt sollicitudin, nunc sapien sodales augue, sit amet tempor nulla orci et purus. Fusce eu finibus orci, non facilisis ligula. Sed vel libero pharetra, faucibus justo id, ullamcorper diam. Donec magna augue, gravida vel semper non, auctor eu quam. Duis id dui ullamcorper, sodales ligula ut, tempus urna. Phasellus vestibulum sapien ac justo aliquam, vel feugiat arcu pellentesque. Mauris orci lectus, ultrices eu libero a, tincidunt auctor est. Morbi pellentesque condimentum mi in convallis. Nullam molestie justo imperdiet rutrum ornare. Sed et vestibulum velit, venenatis elementum augue.',
            image: 'https://sample-posts-frontend-test.s3.amazonaws.com/post_2.jpg',
            createdAt: '2022-07-11T21:02:37Zz',
        },
    ]

    const fetchData = (): void => {
        setTimeout(() => {
            // setPosts((prev) => [...prev, ...Array.from({ length: 10 })])
        }, 1500)
    }

    return (
        <>
            <Header />
            <MainContent>
                <div className='max-w-5xl mx-auto h-full'>
                    <InfiniteScroll
                        dataLength={posts.length}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        next={() => fetchData()}
                    >
                        <div className='grid grid-cols-1 md:grid-cols-6 gap-y-4 mt-4 overflow-auto'>
                            {posts.map((postItem, index) => {
                                if (index % 6 === 0) {
                                    return (
                                        <div
                                            className='md:col-start-1 md:col-end-4'
                                            key={postItem.id}
                                        >
                                            <SmallCard
                                                imagePosition='left'
                                                post={postItem}
                                            />
                                        </div>
                                    )
                                }
                                if (index % 6 === 1) {
                                    return (
                                        <div
                                            className='md:col-start-4 md:col-end-7'
                                            key={postItem.id}
                                        >
                                            <SmallCard
                                                imagePosition='left'
                                                post={postItem}
                                            />
                                        </div>
                                    )
                                }
                                if (index % 6 === 2) {
                                    return (
                                        <div
                                            className='md:col-start-3 md:col-span-4'
                                            key={postItem.id}
                                        >
                                            <BigCard post={postItem} />
                                        </div>
                                    )
                                }
                                if (index % 6 === 3) {
                                    return (
                                        <div
                                            className='md:col-start-1 md:col-end-4'
                                            key={postItem.id}
                                        >
                                            <SmallCard
                                                imagePosition='right'
                                                post={postItem}
                                            />
                                        </div>
                                    )
                                }
                                if (index % 6 === 4) {
                                    return (
                                        <div
                                            className='md:col-start-4 md:col-end-7'
                                            key={postItem.id}
                                        >
                                            <SmallCard
                                                imagePosition='right'
                                                post={postItem}
                                            />
                                        </div>
                                    )
                                }
                                if (index % 6 === 5) {
                                    return (
                                        <div
                                            className='md:col-start-1 md:col-end-5'
                                            key={postItem.id}
                                        >
                                            <BigCard post={postItem} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            </MainContent>
        </>
    )
}
