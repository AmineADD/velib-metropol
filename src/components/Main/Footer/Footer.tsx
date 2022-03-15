import { FC } from 'react'
import styles from '../../../../styles/Home.module.css'

const Footer: FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
    <div className={`${styles.description} ${isDarkMode ? styles.dark : styles.transparent}`}>
        <code className={styles.code}>User interface Generation (NOHILE ( SOCIÉTÉ NJG CONNECT)) : Efrei</code>
        <code className={styles.code}>WEBDMFS1 - Groupe DF2</code>
    </div >)

export default Footer;