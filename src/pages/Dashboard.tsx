import React from "react";
import Row from "../ui/row/Row";
import Heading from "../ui/text/Headings";
import { RowType } from "../ui/row/@types";
import { HeadingType } from "../ui/text/@types";

const Dashboard = () => {
  return (
    <Row type={RowType.horizontal}>
      <Heading as={HeadingType.H1}>Dashboard</Heading>
      <p>TEST</p>
    </Row>
  );
};

export default Dashboard;
