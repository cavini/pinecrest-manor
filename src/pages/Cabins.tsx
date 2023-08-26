import React from "react";
import Row, { RowType } from "../ui/Row";
import Heading, { HeadingType } from "../ui/Headings";

const Cabins = () => {
  return (
    <Row type={RowType.horizontal}>
      <Heading as={HeadingType.H1}>All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
};

export default Cabins;
