import React from "react";
import Heading, { HeadingType } from "../ui/Headings";
import Row, { RowType } from "../ui/Row";

function Bookings() {
  return (
    <Row type={RowType.horizontal}>
      <Heading as={HeadingType.H1}>All bookings</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Bookings;
