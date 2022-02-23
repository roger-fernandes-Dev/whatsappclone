import Image from "next/image";
import styles from "../styles/Header.module.css"

function Navbar() {
    return (
        <ul className={styles.navbar}>
            
            <span className={styles.brand}>
            </span>
            
            <a href="#"><li className={styles.navbar_list}>WHATSAPP WEB</li></a>
            <a href="#"><li className={styles.navbar_list}>RECURSOS</li></a>
            <a href="#"><li className={styles.navbar_list}>DOWNLOAD</li></a>
            <a href="#"><li className={styles.navbar_list}>SEGURANÇA</li></a>
            <a href="#"><li className={styles.navbar_list}>CENTRAL DE AJUDA</li></a>
            <span className={styles.language}>
            <span className={styles.icon_rede}><Image src="/rede.svg" width="19px" height="19px" /></span>
                <li className={styles.navbar_list_ptbr}>PT (BR)</li>
                <svg x="0" y="0" width="9px" height="20px" viewBox="0 0 9 20" className={styles.menu_language}>
                    <polygon fill="currentColor" points="1,9 4.5,12.5 8,9 "></polygon>
                </svg>
            </span>
        </ul>
    )
}
export default Navbar;