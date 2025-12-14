import MusicCard from '../MusicCard/MusicCard';
import  styles from  './MusicList.module.scss' ;

export default function MusicList({musics}) {
    const musicsRow = [];

    for (let i = 0; i < musics.length; i+=4) {
        musicsRow.push(musics.slice(i, i + 4));
    }


    return (
        <div className={`container ${styles.musicList}`}>
            {musicsRow.map((row) => {
                return (
                    <div key={musicsRow.indexOf(row)} className='row'>
                        {row.map((music)=>{
                            return(
                                <div key={row.indexOf(music)} className={`col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 ${styles.musicCol}`}>
                                    <MusicCard music={music}/>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}