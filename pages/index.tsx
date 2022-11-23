import React, { useCallback, useState } from 'react'

import BigCard from '@/components/system/BigCard'
import { GetServerSideProps } from 'next'
import Header from '@/components/shared/template/Header'
import { IPost } from '@/types/post'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import MainContent from '@/components/shared/template/MainContent'
import SmallCard from '@/components/system/SmallCard'
import fetcher from '@/utils/fetcher'

interface IPostsPageProps {
    posts: IPost[]
}

export default function PostsPage({ posts }: IPostsPageProps): JSX.Element {
    const [postsData, setPostsData] = useState({
        posts,
        startMorePosts: posts.length,
        hasMore: true,
    })

    const fetchData = useCallback(async () => {
        const response: IPost[] = await fetcher({
            url: `https://sample-posts.coderockr.com/api/posts?_start=${postsData.startMorePosts}&_limit=4`,
            method: 'GET',
        })
        if (response.length === 0) {
            setPostsData({ ...postsData, hasMore: false })
            return
        }
        setPostsData({
            posts: [...postsData.posts, ...response],
            startMorePosts: postsData.startMorePosts + response.length,
            hasMore: true,
        })
    }, [postsData])

    return (
        <>
            <Header />
            <MainContent>
                <div className='max-w-5xl mx-auto h-full mt-4'>
                    <InfiniteScroll
                        dataLength={postsData.posts.length}
                        hasMore={postsData.hasMore}
                        loader={<LoadingSpinner />}
                        next={fetchData}
                    >
                        <div className='grid grid-cols-1 md:grid-cols-6 gap-y-4 overflow-auto'>
                            {postsData.posts.map((postItem, index) => {
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

export const getServerSideProps: GetServerSideProps<{ posts: IPost[] }> = async () => {
    const response = await fetcher({
        url: 'https://sample-posts.coderockr.com/api/posts?_limit=8&_page=1',
        method: 'GET',
    })
    const posts = response as IPost[]

    return {
        props: {
            posts,
        },
    }
}
