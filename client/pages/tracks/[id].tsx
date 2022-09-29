import React from "react";
import { ITrack } from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";

const TrackPage = () => {
  const router = useRouter();
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

  return (
    <MainLayout>
      <Button
        onClick={() => router.push("/tracks")}
        style={{ fontSize: "32px" }}
        variant="outlined">
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ marginLeft: "30px" }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Количество прослушиваний{track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к треку</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid>
        <TextField
          label="Ваше имя"
          fullWidth
        />
        <TextField
          style={{marginTop: '10px'}}
          label="Комментарий"
          fullWidth
          multiline
          rows={5}
        />
        <Button style={{marginTop: '10px'}} variant="outlined">Отправить</Button>
      </Grid>
      <div>
        {track.comments.map(comment =>
        <div>
          <div>{comment.username}</div>
          <div>{comment.text}</div>
        </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TrackPage;