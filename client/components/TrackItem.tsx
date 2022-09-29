import React from "react";
import { ITrack } from "../types/track";
import { Card, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from '../styles/TrackItem.module.scss'
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";


interface TrackItemProps {
  track: ITrack
  active?: boolean
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false }) => {
  const router = useRouter();

  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <img className={styles.trackAvatar} width={70} height={70} src={track.picture}/>
      <Grid className={styles.trackInfo} container direction='column'>
        <div className={styles.name}>{track.name}</div>
        <div className={styles.artist}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:30</div>}
      <IconButton onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
        <Delete/>
      </IconButton>
    </Card>
  );
};

export default TrackItem;
