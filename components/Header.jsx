import styles from '../styles/Header.module.css'
import Menu from './Menu'

export default function Header(){

    return (
        <>
            <div className={styles.container}><Menu /></div>
        </>
    )
}