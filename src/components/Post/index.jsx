import {format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({author, content, publishedAt}) {

    const [comments, SetComments] = useState([
        'Post muito bacana, hein 👏👏'
    ])

    const [newCommentText, setNewComentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLL 'ás' HH:mm'h'", {
        locale: ptBr,
    });

    const publishededDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    });

    function handleCreateNewComment(){
        event.preventDefault()
        SetComments([...comments, newCommentText]);
        setNewComentText('')
    }

    function handleNewsCommentChange(){
        setNewComentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} img={author.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={publishedAt}>{publishededDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                <p className={styles.title}>Fala galeraa 👋</p>

                <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea fugiat, 
            laborum sit, animi consectetur, asperiores ducimus at fuga quia ipsum. Ipsa, placeat dicta. Numquam 
            maxime aspernatur ratione optio suscipit! 🚀
                </p>

                <p className={styles.link}>
                    👉{' '}<a href="#">jane.design/doctorcare</a>
                </p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea value={newCommentText} onChange={handleNewsCommentChange} name="comment" id="" placeholder='Escreva um  comentário'></textarea>
                <footer>
                    <button type='submit' >Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>
        </article>
    )
}