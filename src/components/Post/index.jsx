import { Avatar } from '../Avatar'
import styles from './Post.module.css'
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} img="https://avatars.githubusercontent.com/u/50570879?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Simão José</strong>
                        <span>Dev Front-End</span>
                    </div>
                </div>
                <time title='11 de Maio ás 08:13h' datetime="2020-05-11 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p className={styles.title}>Fala galeraa 👋</p>

                <p className={styles.paragraph}>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
                    evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>

                <p className={styles.link}>
                    👉 <a href="#">jane.design/doctorcare</a>
                </p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}