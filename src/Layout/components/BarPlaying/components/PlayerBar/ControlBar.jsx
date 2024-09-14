import styles from './BP.module.scss'
import RangeButton from '../../../../../components/Button/RangeButton'
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { useTabSongContext } from '../../../../../context/tabsong';
import { ACTION_TYPE, MODE_REPEAT_SONG } from '../../../../../context/tabsong/constant';
import { formatTime } from '../../../../../common/ultilities';

const ControlBar = ({ data }) => {

    const { selectorTabSong, actionTabSong } = useTabSongContext();
    const { songPlayer, listSongChoice, volumn, isPlaying, modeRepeatSong, isReverseListSong, listSongReverse } = selectorTabSong;

    const { handleSetPlaying, handleSetSongPlayer, handleSetReverseListSong, handleSetRepeatSong } = actionTabSong;

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    let songPlayList = isReverseListSong ? listSongReverse : listSongChoice;

    useEffect(() => {
        audioRef.current.volume = volumn / 100;
    }, [volumn])

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
                endSongAction();
            };

            return () => {
                audio.ontimeupdate = null;
            };
        }
    }, [data, songPlayList, modeRepeatSong]);

    const endSongAction = () => {
        handleNextSong();
    }

    const handlePlayAudio = () => {
        handleSetPlaying(ACTION_TYPE.SET_IS_PLAYING, !isPlaying);
    };

    const handleBackSong = () => {
        const index = songPlayList.findIndex((item) => item.radioId == data.radioId);
        if (index == 0) {
            return;
        }
        let itemPrev = songPlayList[index - 1]
        let dataSongPlayer = {
            title: itemPrev?.title,
            thumb: itemPrev?.thumbnail,
            author: itemPrev?.artistsNames,
            radioId: itemPrev?.radioId,
            currentTimePlay: 0,
        }
        handleSetSongPlayer(ACTION_TYPE.SET_SONG_PLAYER, dataSongPlayer);
    }

    const handleNextSong = () => {
        const index = songPlayList.findIndex((item) => item.radioId == data.radioId);

        if (modeRepeatSong == MODE_REPEAT_SONG.SONG) {
            audioRef.current.currentTime = 0;
            return;
        }

        if (index == songPlayList.length - 1) {
            console.log(1);
            if (modeRepeatSong == MODE_REPEAT_SONG.LIST) {
                handleSetSongPlayer(ACTION_TYPE.SET_SONG_PLAYER, songPlayList[0]);
                audioRef.current.currentTime = 0;
                return;
            }
            handleSetPlaying(ACTION_TYPE.SET_IS_PLAYING, false);
            return;
        }

        let itemNext = songPlayList[index + 1]
        let dataSongPlayer = {
            title: itemNext?.title,
            thumb: itemNext?.thumbnail,
            author: itemNext?.artistsNames,
            radioId: itemNext?.radioId,
            currentTimePlay: 0,
        }
        handleSetSongPlayer(ACTION_TYPE.SET_SONG_PLAYER, dataSongPlayer);
    }

    const handleRepeatSong = () => {
        let modeRepeat = modeRepeatSong == MODE_REPEAT_SONG.SONG ? 0 : modeRepeatSong + 1;
        handleSetRepeatSong(ACTION_TYPE.SET_IS_REPEAT_SONG, modeRepeat)
    }

    useEffect(() => {
        (() => {
            if (!audioRef.current) {
                return
            }
            if (isPlaying) {
                audioRef.current.play();
                return
            }
            audioRef.current.pause();
        })()
    }, [isPlaying, data])



    const handleProgressChange = (e) => {
        const audio = audioRef.current;
        const newTime = (e.target.value / 100) * duration;
        audio.currentTime = newTime;
    };

    const handleSetReverseSong = () => {
        handleSetReverseListSong(ACTION_TYPE.SET_IS_REVERSE_LIST_SONG, !isReverseListSong)
    }


    return (
        <div className={styles.pb__center}>
            <div className={styles.pb__clist}>
                <button className={`${styles.pb__clitem} ${isReverseListSong ? styles.pb__active : ''}`} onClick={handleSetReverseSong}>
                    <i className="icon ic-shuffle"></i>
                </button>
                <button className={styles.pb__clitem} onClick={handleBackSong}>
                    <i className="icon ic-pre"></i>
                </button>
                <button className={`${styles.pb__clitem} ${styles.pb__clitemPlay}`} onClick={handlePlayAudio} >
                    {isPlaying ?
                        <i className="icon ic-pause-circle-outline"></i>
                        :
                        <i className="icon ic-play-circle-outline"></i>
                    }

                </button>
                <button className={styles.pb__clitem} onClick={handleNextSong}>
                    <i className="icon ic-next"></i>
                </button>
                <button className={`${styles.pb__clitem} ${modeRepeatSong != MODE_REPEAT_SONG.NONE ? styles.pb__active : ''}`} onClick={handleRepeatSong}>
                    {modeRepeatSong == MODE_REPEAT_SONG.SONG ?
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

            <audio ref={audioRef} src={data.path} />
        </div>
    )
}

export default memo(ControlBar) 