import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css"

function Navbar() {
    return (
        <ul className={styles.navbar}>
            <Link href="#">
                <span className={styles.brand}>
                    <Image src="/brand.svg" width="160px" height="39px" />
                </span>
            </Link>
            <Link href="#"><li className={styles.navbar_list}>WHATSAPP WEB</li></Link>
            <Link href="#"><li className={styles.navbar_list}>RECURSOS</li></Link>
            <Link href="#"><li className={styles.navbar_list}>DOWNLOAD</li></Link>
            <Link href="#"><li className={styles.navbar_list}>SEGURANÇA</li></Link>
            <Link href="#"><li className={styles.navbar_list}>CENTRAL DE AJUDA</li></Link>
            <Link href="#"><span className={styles.icon_rede}><Image src="/rede.svg" width="19px" height="19px" /></span></Link>
            <Link href="#"><li className={styles.navbar_list_ptbr}>PT (BR)</li></Link>
            <Link href="#">
                <svg x="0" y="0" width="9px" height="20px" viewBox="0 0 9 20" className={styles.menu_language}>
                    <polygon fill="currentColor" points="1,9 4.5,12.5 8,9 "></polygon>
                </svg>
            </Link>
        </ul>
    )
}
export default Navbar;