import React from "react";
import Button from "../ui/button/Button";
import Heading from "../ui/text/Headings";
import { useMoveBack } from "../hooks/useMoveBack";
import { StyledPageNotFound } from "../ui/StyledPageNotFound";
import { Box } from "../ui/Box";
import { HeadingType } from "../ui/text/@types";
import { ButtonSize } from "../ui/button/@types";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as={HeadingType.H1}>
          The page you are looking for could not be found 😢
        </Heading>
        <Button onClick={moveBack} size={ButtonSize.large}>
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
