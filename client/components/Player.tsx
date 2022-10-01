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
  const { pauseTrack, playTrack } = useAction();
  const track: ITrack =
    {
      _id: "1",
      name: "trek 1",
      artist: "some artist",
      text: "some text",
      listens: 2,
      picture: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      audio: "audio.mp3",
      comments: []
    };

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  useEffect(() => {
    if(!audio) {
      audio = new Audio()
    }
  }, [])

  return (
    <div className={s.player}>
      <IconButton onClick={play}>
        {pause ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid className={styles.trackInfo} container direction="column">
        <div className={styles.name}>{track.name}</div>
        <div className={styles.artist}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChangeHandler={() => ({})} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChangeHandler={() => ({})} />
    </div>
  );
};

export default Player;