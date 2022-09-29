import Grid from "@mui/material/Grid";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "trek 1",
      artist: "some artist",
      text: "some text",
      listens: 2,
      picture: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      audio: "audio.mp3",
      comments: []
    },
    {
      _id: "2",
      name: "trek 2",
      artist: "some artist",
      text: "some text",
      listens: 22,
      picture: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      audio: "audio.mp3",
      comments: []
    },
    {
      _id: "3",
      name: "trek 3",
      artist: "some artist",
      text: "some text",
      listens: 13,
      picture: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      audio: "audio.mp3",
      comments: []
    }
  ];

  return (
    <MainLayout>
      <Grid container
            justifyContent={"center"}>
        <Card style={{ width: "900px" }}>
          <Box p={3}>
            <Grid container
                  justifyContent={"space-between"}
                  alignItems={"center"}>
              <h1>Список треков</h1>
              <Button onClick={() => router.push("/tracks/create")}
                      variant="contained"
                      color="secondary">Download</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;