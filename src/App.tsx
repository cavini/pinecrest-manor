import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Heading, { HeadingType } from "./ui/Headers";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Heading as={HeadingType.H2}>Pinecrest Manor</Heading>
    </>
  );
};

export default App;
