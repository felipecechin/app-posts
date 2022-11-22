import styles from './styles.module.scss'

interface ICardDescriptionProps {
    authorName: string
    title: string
    content: string
}

function CardDescription({ authorName, title, content }: ICardDescriptionProps): JSX.Element {
    return (
        <div className='flex flex-col justify-center space-y-2 px-10'>
            <p className={styles.author}>{authorName}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.content}>{content}</p>
        </div>
    )
}

export default CardDescription
