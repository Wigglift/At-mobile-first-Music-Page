import Socials from "../Socials/Socials";
import styles from "./Menu.module.scss";

export default function Menu({active}) {
    return (
        <div>
            <div className={active ? `${styles.menu} ${styles.menu_active}` : styles.menu}>
                <header className={styles.menuHeader}>
                    <figure>
                        <img className={styles.menuLogo} src="logo.png" alt=""/>
                    </figure>
                    <Socials />
                </header>
                <nav className={styles.menuList}>
                    <a href="" className={styles.menuItem}>Playlists</a>
                    <a href="" className={styles.menuItem}>Podcasts</a>
                    <a href="" className={styles.menuItem}>Albuns</a>
                    <a href="" className={styles.menuItem}>Artistas</a>
                </nav>
            </div>
        </div>
    );
}
