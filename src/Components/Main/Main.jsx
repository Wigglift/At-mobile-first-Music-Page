import MusicList from '../MusicList/MusicList';
import styles from './Main.module.scss';
export default function Main({musics}) {
    return (
        <main className={styles.main}>
            <h1>Musicas</h1>
            <hr />
            <MusicList musics={musics}/>
        </main>
    );
}