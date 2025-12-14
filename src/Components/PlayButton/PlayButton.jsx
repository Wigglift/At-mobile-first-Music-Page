import styles from './PlayButton.module.scss';

export default function PlayButton() {
    return (
        <button>
            <span className={styles.button_top}><i class="fa-solid fa-play"></i></span>
        </button>
    );
}