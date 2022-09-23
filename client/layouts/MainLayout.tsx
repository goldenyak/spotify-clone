import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

type MainLayoutProps = {
  children: React.ReactNode
};

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Navbar/>
      <Container style = {{margin: "90px 0"}}>
        {props.children}
      </Container>
    </>
  );
};

export default MainLayout;
