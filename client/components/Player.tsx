import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import styles from "../styles/TrackItem.module.scss";
import s from "../styles/Player.module.scss";
import { ITrack } from "../types/track";
import Grid from "@mui/material/Grid";
import TrackProgress from "./TrackProgress";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";

let audio;

const Player = () => {
  const { pause, active, volume, duration, currentTime } = useTypedSelector(state => state.player);
  const { pauseTrack, playTrack, setVolume, setDuration, setCurrentTime, setActiveTrack } = useAction();
  const track: ITrack =
    {
      _id: "1",
      name: "trek 1",
      artist: "some artist",
      text: "some text",
      listens: 2,
      picture: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      audio: "https://sefon.pro/artist/98864-milana-star/",
      comments: []
    };

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
      audio.src = track.audio;
      audio.volume = 0.1;
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolumeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };
  const changeCurrentTimeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  const setAudio = () => {
    if (active) {
      audio.src = active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  if(!active) {
    return null;
  }

  return (
    <div className={s.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid className={styles.trackInfo} container direction="column">
        <div className={styles.name}>{active?.name}</div>
        <div className={styles.artist}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChangeHandler={changeCurrentTimeHandler} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={volume} right={100} onChangeHandler={changeVolumeHandler} />
    </div>
  );
};

export default Player;