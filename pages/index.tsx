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
import { showSwalError } from '@/utils/reactSwal'

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
        try {
            const response: IPost[] = await fetcher({
                url: `/posts?_start=${postsData.startMorePosts}&_limit=4`,
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
        } catch (error) {
            showSwalError('Ocorreu algum erro ao buscar os dados')
        }
    }, [postsData])

    return (
        <>
            <Header />
            <MainContent>
                <div className='max-w-5xl mx-auto mt-4'>
                    <InfiniteScroll
                        dataLength={postsData.posts.length}
                        hasMore={postsData.hasMore}
                        loader={<LoadingSpinner />}
                        next={fetchData}
                    >
                        <div className='grid-show-posts'>
                            {postsData.posts.map((postItem, index) => {
                                return (
                                    <div key={postItem.id}>
                                        {(index % 6 === 0 || index % 6 === 1) && (
                                            <SmallCard
                                                imagePosition='left'
                                                post={postItem}
                                            />
                                        )}
                                        {(index % 6 === 3 || index % 6 === 4) && (
                                            <SmallCard
                                                imagePosition='right'
                                                post={postItem}
                                            />
                                        )}
                                        {(index % 6 === 2 || index % 6 === 5) && <BigCard post={postItem} />}
                                    </div>
                                )
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
        url: '/posts?_limit=8',
        method: 'GET',
    })
    const posts = response as IPost[]

    return {
        props: {
            posts,
        },
    }
}
