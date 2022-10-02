import Grid from "@mui/material/Grid";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useAction";
import { wrapper } from "../../store";

const Index = () => {
  const router = useRouter();
  // const {} = useAction();
  const { tracks, error } = useTypedSelector(state => state.tracks);

  if (error) {
    return <MainLayout>
      <h1>{error}</h1>
    </MainLayout>;
  }

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

// // @ts-ignore
// export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
//     // store.dispatch;
//   }
// );
