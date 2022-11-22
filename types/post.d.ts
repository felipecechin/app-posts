export interface IPost {
    id: number
    title: string
    author: {
        name: string
    }
    createdAt: string
    image: string
    content: string
}
