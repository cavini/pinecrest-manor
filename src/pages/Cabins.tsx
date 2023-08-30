import React, { useEffect } from "react";
import Row, { RowType } from "../ui/Row";
import Heading, { HeadingType } from "../ui/Headings";
import { getCabins } from "../services/apiCabins";

const Cabins = () => {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  });
  return (
    <Row type={RowType.horizontal}>
      <Heading as={HeadingType.H1}>All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
};

export default Cabins;
