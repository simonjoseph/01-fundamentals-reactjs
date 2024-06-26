import styles from './Avatar.module.css'
export function Avatar({img, hasBorder = true}){
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={img} />
    )
}