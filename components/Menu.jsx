import styles from "../styles/Header.module.css"
import Brand from "../components/Brand"
export default function Menu() {
    
    return (
        <>
            <Brand />
            <ul className={styles.menu}>
                <li className={styles.items}><a href="#">WHATSAPP WEB</a></li>
                <li><a href="#">RECURSOS</a></li>
                <li><a href="#">DOWNLOAD</a></li>
                <li><a href="#">SEGURANÇA</a></li>
                <li><a href="#">CENTRAL DE AJUDA</a></li>
                <li><a href="#">PT (BR)</a></li>
            </ul>
        </>
    )
}