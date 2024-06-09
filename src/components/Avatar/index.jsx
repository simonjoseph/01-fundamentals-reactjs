import styles from './Avatar.module.css'
export function Avatar({img}){
    return (
        <img className={styles.avatar} src={img} />
    )
}