import React from "react";
import Navbar from "../components/Navbar";

type MainLayoutProps = {
  children: React.ReactNode
};

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <Navbar/>
      {props.children}
    </>
  );
};

export default MainLayout;
