import React from "react";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import styles from '../styles/TrackItem.module.scss'
import s from '../styles/Player.module.scss'
import { ITrack } from "../types/track";
import Grid from "@mui/material/Grid";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const active = false
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
    }

  return (
    <div className={s.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <Grid className={styles.trackInfo} container direction='column'>
        <div className={styles.name}>{track.name}</div>
        <div className={styles.artist}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChangeHandler={() => ({})}/>
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={0} right={100} onChangeHandler={() => ({})}/>
    </div>
  );
};

export default Player;