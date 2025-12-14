import PlayButton from '../PlayButton/PlayButton';
import styles from './MusicCard.module.scss';

export default function MusicCard({music}) {
    return (
        <div className={styles.musicCard}>
            <figure>
                <img src={music.image} alt="" />
            </figure>
            <div className={styles.musicInfo}>
                <div className={styles.musicText}>
                    <div className={styles.musicTittle}>
                        <h3>{music.tittle}</h3>
                    </div>
                    <div className={styles.musicTextInfo}>
                        <p className={styles.author}>{music.author}</p>
                        <p className={styles.duration}>{music.duration}</p>
                    </div>
                </div>
                <div className={styles.playButton}>
                    <PlayButton/>
                </div>
            </div>
        </div>
    );
}