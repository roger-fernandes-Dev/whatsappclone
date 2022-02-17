import Image from "next/image";
import styles from "../styles/Header.module.css"

export default function Brand() {
    return (
        <div className={styles.brand}>
            <Image src="/brand.svg" width={160} height={40} />
        </div>
    )    
}