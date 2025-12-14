import styles from "./SearchBar.module.scss";

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <i class="fa-solid fa-magnifying-glass"></i><input type="text" className={styles.search} placeholder="Pesquisar"/>
        </div>
    );
}