import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";
import "../../Scss/Row.scss";
import MenuButton from "../MenuButton/MenuButton";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Socials from "../Socials/Socials";

export default function Header() { 
    const  [showMenu,setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header className={styles.header}>
            <div className={`row ${styles.headerContent}`}>
                <div className={styles.userIcon}>
                    <i class="fa-solid fa-user"></i>
                </div>
                <SearchBar />
                <div className={styles.menuButton}>
                    <MenuButton action={toggleMenu} active={showMenu}/>
                </div>
                <div className={styles.headerSocials}>
                    <figure>
                        <img className={styles.headerLogo} src="logo.png" alt=""/>
                    </figure>
                    <Socials />
                </div>
            </div>
            <Menu active={showMenu}/>
        </header>
    );
}