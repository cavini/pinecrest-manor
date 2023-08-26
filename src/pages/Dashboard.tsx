import React from "react";
import Row, { RowType } from "../ui/Row";
import Heading, { HeadingType } from "../ui/Headings";

const Dashboard = () => {
  return (
    <Row type={RowType.horizontal}>
      <Heading as={HeadingType.H1}>Dashboard</Heading>
      <p>TEST</p>
    </Row>
  );
};

export default Dashboard;
