import Grid from "@mui/material/Grid";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Button, Card } from "@mui/material";

const Index = () => {
  return (
    <MainLayout>
      <Grid container>
        <Card>
          <Grid container
                justifyContent="space-between"
                alignItems={"center"}>
            <h1>Список треков</h1>
            <Button variant="contained" color="secondary">Download</Button>
          </Grid>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;