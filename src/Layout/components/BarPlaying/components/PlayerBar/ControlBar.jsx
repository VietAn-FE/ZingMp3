import styles from './BP.module.scss'
import RangeButton from '../../../../../components/Button/RangeButton'
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { TabSongContext } from '../..';

const ModeRepeatSong = {
    NONE: 0,
    LIST: 1,
    SONG: 2
}



const ControlBar = ({ data, volume }) => {

    const dataBarContext = useContext(TabSongContext)

    // console.log(33, dataBarContext)

    const playListSong = dataBarContext.songPlayListRender

    const [isPlay, setIsPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [repeatSong, setRepeatSong] = useState(ModeRepeatSong.NONE);

    const audioRef = useRef(null);
    useEffect(() => {
        console.log(volume / 100)
        audioRef.current.volume = volume / 100;

    }, [volume])

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            const updateTime = () => {
                setCurrentTime(audio.currentTime);
            };

            audio.onloadedmetadata = () => {
                setDuration(audio.duration);
            };

            audio.ontimeupdate = updateTime;

            audio.onended = () => {
                handleNextSong();
            };

            return () => {
                audio.ontimeupdate = null;
            };
        }
    }, [data, repeatSong]);

    const handlePlayAudio = () => {
        setIsPlay(!isPlay);
    };

    const handleBackSong = () => {
        const index = playListSong.findIndex((item) => item.radioId == data.radioId);
        if (index == 0) {
            return;
        }
        dataBarContext.dataSongIsPlaying.setStateSession(playListSong[index - 1]);
    }

    const handleNextSong = () => {
        const index = playListSong.findIndex((item) => item.radioId == data.radioId);
        if (index == playListSong.length - 1) {
            if (repeatSong == ModeRepeatSong.LIST) {
                dataBarContext.dataSongIsPlaying.setStateSession(playListSong[0]);
            }
            return;
        }
        if (repeatSong == ModeRepeatSong.SONG) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            return;
        }
        dataBarContext.dataSongIsPlaying.setStateSession(playListSong[index + 1]);
    }

    const handleRepeatSong = () => {
        let index = repeatSong == ModeRepeatSong.SONG ? 0 : repeatSong + 1;
        setRepeatSong(index)
    }

    useEffect(() => {
        if (!audioRef.current) {
            return
        }
        audioRef.current.currentTime = 0;
    }, [data])


    useEffect(() => {
        if (!audioRef.current) {
            return
        }
        if (isPlay) {
            audioRef.current.play();
            return
        }
        audioRef.current.pause();
    }, [isPlay, data])



    const handleProgressChange = (e) => {
        const audio = audioRef.current;
        const newTime = (e.target.value / 100) * duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };


    return (
        <div className={styles.pb__center}>
            <div className={styles.pb__clist}>
                <button className={`${styles.pb__clitem} ${dataBarContext.isRandomSong ? styles.pb__active : ''}`} onClick={() => dataBarContext.setIsRandomSong(!dataBarContext.isRandomSong)}>
                    <i className="icon ic-shuffle"></i>
                </button>
                <button className={styles.pb__clitem} onClick={handleBackSong}>
                    <i className="icon ic-pre"></i>
                </button>
                <button className={`${styles.pb__clitem} ${styles.pb__clitemPlay}`} onClick={handlePlayAudio} >
                    {isPlay ?
                        <i className="icon ic-pause-circle-outline"></i>
                        :
                        <i className="icon ic-play-circle-outline"></i>
                    }

                </button>
                <button className={styles.pb__clitem} onClick={handleNextSong}>
                    <i className="icon ic-next"></i>
                </button>
                <button className={`${styles.pb__clitem} ${repeatSong != ModeRepeatSong.NONE ? styles.pb__active : ''}`} onClick={handleRepeatSong}>
                    {repeatSong == ModeRepeatSong.SONG ?
                        <i className="icon ic-repeat-one"></i>
                        :
                        <i className="icon ic-repeat"></i>
                    }
                </button>
            </div>
            <div className={styles.pb__cbot}>
                <span className={styles.pb__cbtime}>{formatTime(currentTime)}</span>
                <div className={styles.pb__cbprocess} >
                    <RangeButton valueRange={(currentTime / duration) * 100 || 0} onChangeProcessBar={handleProgressChange} />
                </div>
                <span className={styles.pb__cbtime}>{formatTime(duration)}</span>
            </div>

            <audio ref={audioRef} src={data.mp3} />
        </div>
    )
}

export default memo(ControlBar) 