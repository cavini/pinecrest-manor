import React from "react";
import Row, { RowType } from "../ui/Row";
import Heading, { HeadingType } from "../ui/Headings";
import CabinTable from "../components/cabins/CabinTable";

const Cabins = () => {
  return (
    <>
      <Row type={RowType.horizontal}>
        <Heading as={HeadingType.H1}>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

export default Cabins;
