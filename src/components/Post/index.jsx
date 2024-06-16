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
        event.target.setCustomValidity('')
        setNewComentText(event.target.value)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo e obrigatório')
    }

    function deletarComent(comment){
        const commentsWithoutDeletedOne = comments.filter((item) => item !== comment)
        SetComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                {/* <p className={styles.title}>{content[0].content}</p> */}

                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    value={newCommentText} 
                    onChange={handleNewsCommentChange} 
                    name="comment" 
                    id="" 
                    placeholder='Escreva um  comentário'
                    onInvalid={handleNewCommentInvalid}
                    required
                >
                </textarea>
                <footer>
                    <button 
                        className={styles.commentFormButton} 
                        type='submit' disabled={isNewCommentEmpty} 
                    >
                        Comentar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deletarComent} 
                        />)
                })}
            </div>
        </article>
    )
}