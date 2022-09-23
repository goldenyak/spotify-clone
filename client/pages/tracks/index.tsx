import Grid from "@mui/material/Grid";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {_id: '1', name: 'trek 1', artist: 'some artist', text: 'some text', listens: 2, picture: ' picture.jpg', audio: 'audio.mp3', comments: []},
    {_id: '2', name: 'trek 2', artist: 'some artist', text: 'some text', listens: 22, picture: ' picture.jpg', audio: 'audio.mp3', comments: []},
    {_id: '3', name: 'trek 3', artist: 'some artist', text: 'some text', listens: 13, picture: ' picture.jpg', audio: 'audio.mp3', comments: []}
  ]

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

        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;