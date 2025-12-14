import styles from "./MenuButton.module.scss";

export default function MenuButton({action,active}) {
    if(!active){
        return (
            <div className={styles.menuButton} onClick={()=>action()}>
                <i class="fa-solid fa-bars"></i>
            </div>
        );
    }else{
        return (
            <div className={`${styles.menuButton} ${styles.menuButton_active}`} onClick={()=>action()}>
                <i class="fa-solid fa-bars"></i>
            </div>
        );
    }
}