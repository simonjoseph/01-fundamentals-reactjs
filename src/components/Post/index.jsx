import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

export function Post({author, content}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} img="https://avatars.githubusercontent.com/u/50570879?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>Dev Front-End</span>
                    </div>
                </div>
                <time title='11 de Maio ás 08:13h' datetime="2020-05-11 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p className={styles.title}>Fala galeraa 👋</p>

                <p className={styles.paragraph}>
                    {content}
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

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea name="" id="" placeholder='Escreva um  comentário'></textarea>
                <footer>
                    <button type='submit' >Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}