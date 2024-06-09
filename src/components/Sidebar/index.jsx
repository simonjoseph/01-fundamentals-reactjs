import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from '../Avatar'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2h8ZW58MHx8MHx8fDA%3D" alt="" />
            <div className={styles.profile} >
                {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/50570879?v=4"/> */}
                <Avatar img="https://avatars.githubusercontent.com/u/50570879?v=4"/>
                <strong>Simão José</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href=""> <PencilLine size={20} /> Editar seu perfil</a>
            </footer>
        </aside>
    )
}