import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { StyledSidebar } from "../ui/StyledSideBar";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;
