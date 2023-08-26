import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Heading, { HeadingType } from "./ui/Headers";
import StyledApp from "./ui/StyledApp";
import Button, { ButtonSize, ButtonVariation } from "./ui/Button";
import Row, { RowType } from "./ui/Row";
import Input from "./ui/Input";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type={RowType.horizontal}>
            <Heading as={HeadingType.H1}>Pinecrest Manor</Heading>
            <div>
              <Heading as={HeadingType.H2}>Check in and out</Heading>
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Button
                variation={ButtonVariation.secondary}
                size={ButtonSize.small}
                onClick={() => alert("Check out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as={HeadingType.H3}>Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
};

export default App;
