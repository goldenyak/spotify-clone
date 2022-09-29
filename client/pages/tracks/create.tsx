import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    setActiveStep(prev => prev + 1)
  };

  const back = () => {
    setActiveStep(prev => prev - 1)
  };


  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === -1 && <h3>Пройдите все шаги, чтобы загрузить трек</h3>}
        {activeStep === 0 && <h1>step 1</h1>}
        {activeStep === 1 && <h1>step 2</h1>}
        {activeStep === 2 && <h1>step 3</h1>}
        {activeStep === 3 && <h1>Трек успешно загружен</h1>}
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button onClick={back} disabled={activeStep === -1}>Назад</Button>
        <Button onClick={next} disabled={activeStep === 3}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;