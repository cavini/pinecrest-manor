import React from "react";
import Heading from "../ui/text/Headings";
import Row from "../ui/row/Row";
import { RowType } from "../ui/row/@types";
import { HeadingType } from "../ui/text/@types";

function Bookings() {
  return (
    <Row type={RowType.horizontal}>
      <Heading as={HeadingType.H1}>All bookings</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Bookings;
