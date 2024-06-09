import React from "react"
import styles from "./Header.module.css"
import igniteLogo from "../../assets/logo.png"

export function Header(){
    return(
        <div className={styles.header}>
            <img className={styles.logo} src={igniteLogo} alt="ignite logo" />
            <h1>Ignite Feed</h1>
        </div>
    )
}