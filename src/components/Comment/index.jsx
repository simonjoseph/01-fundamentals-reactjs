import { useState } from 'react'

import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeletarBtn(){
        onDeleteComment(content)
    }
    
    function handleLikeBtn(){
        setLikeCount((state) => state + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} img="https://avatars.githubusercontent.com/u/50570879?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <strong>Simão José <span>Você</span></strong>
                            <time dateTime="2024-06-09">Cerca de 2h</time>
                        </div>
                        <button 
                            onClick={handleDeletarBtn} 
                            title='deletar'
                        >
                            <Trash size={24} />
                        </button>
                    </div>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeBtn}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}