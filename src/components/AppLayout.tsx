import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Main, StyledAppLayout } from "../ui/StyledAppLayout";
import { StyledContainer } from "../ui/StyledContainer";
const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
