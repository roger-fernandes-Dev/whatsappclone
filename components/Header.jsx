import Navbar from "./Navbar";

/**
 * cabellho da página incluindo
 * Menu
 * Brand
 * Icon 
 * 
 * by Roger Fernandes Garcia
 * linkedin https://www.linkedin.com/in/roger-fernandes-garcia-de-sousa-5a0bb214b/
 * GitHub https://github.com/roger-fernandes-Dev/roger-fernandes-Dev
 * @returns 
 */

import styles from "../styles/Header.module.css"
function Header() {
    return (
        <div className={styles.container}>
            <Navbar />
        </div>
    )
}
export default Header;