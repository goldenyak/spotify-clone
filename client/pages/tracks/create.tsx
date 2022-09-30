import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import FileUpload from "../../components/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    setActiveStep(prev => prev + 1);
  };

  const back = () => {
    setActiveStep(prev => prev - 1);
  };


  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === -1 && <h3>Пройдите все шаги, чтобы загрузить трек</h3>}
        {activeStep === 0 &&
          <Grid container direction="column" style={{ padding: "20px" }}>
            <TextField style={{ marginTop: "10px" }} label="Название трека" />
            <TextField style={{ marginTop: "10px" }} label="Имя исполнителя" />
            <TextField style={{ marginTop: "10px" }}
                       label="Слова к треку"
                       multiline
                       rows={3}
            />
          </Grid>
        }
        {activeStep === 1 &&
          <FileUpload
            setFile={setPicture}
            accept="image/*">
            <Button>Загрузите изображение</Button>
          </FileUpload>
        }
        {activeStep === 2 &&
          <FileUpload
            setFile={setAudio}
            accept="audio/*">
            <Button>Загрузите трек</Button>
          </FileUpload>
        }
        {activeStep === 3 && <h1>Трек успешно загружен</h1>}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button onClick={back} disabled={activeStep === -1}>Назад</Button>
        <Button onClick={next} disabled={activeStep === 3}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;