import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

type MainLayoutProps = {
  children: React.ReactNode
};

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Navbar/>
      <Container maxWidth="xl" style = {{margin: "90px 0"}}>
        {props.children}
      </Container>
      <Player/>
    </>
  );
};

export default MainLayout;
