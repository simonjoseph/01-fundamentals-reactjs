import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'
export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} img="https://avatars.githubusercontent.com/u/50570879?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <strong>Simão José <span>Você</span></strong>
                            <time datetime="2024-06-09">Cerca de 2h</time>
                        </div>
                        <button title='deletar'><Trash size={24} /></button>
                    </div>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}