import { Img, StyledLogo } from "../ui/StyledLogo";
import React from "react";

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
