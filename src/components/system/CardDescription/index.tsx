import styles from './styles.module.scss'
import { useMemo } from 'react'

interface ICardDescriptionProps {
    authorName: string
    title: string
    content: string
}

function CardDescription({ authorName, title, content }: ICardDescriptionProps): JSX.Element {
    const contentWithoutTags = useMemo(() => {
        return content.replace(/(<([^>]+)>)/gi, '')
    }, [content])

    return (
        <div className='flex flex-col justify-center space-y-2 px-10'>
            <p className={styles.author}>{authorName}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.content}>{contentWithoutTags}</p>
        </div>
    )
}

export default CardDescription
