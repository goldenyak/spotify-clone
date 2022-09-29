import React from "react";
import { Card, Container, Step, StepLabel, Stepper } from "@mui/material";
import Grid from "@mui/material/Grid";

interface StepWrapperProps {
  activeStep: number;
  children: React.ReactNode;
}

const steps = ["Информация о треке", "Загрузите обложку", "Загрузите сам трек"];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) =>
          <Step key={index}
                completed={activeStep > index}
          >
            <StepLabel>
              {step}
            </StepLabel>
          </Step>
        )}
      </Stepper>
      <Grid container justifyContent='center' style={{margin: '70px 0', height: '270px' }}>
          <Card style={{width: '600px'}}>
            {children}
          </Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;