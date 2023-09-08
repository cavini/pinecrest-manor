import React, { useState } from "react";
import Row from "../ui/row/Row";
import Heading from "../ui/text/Headings";
import CabinTable from "../components/cabins/CabinTable/CabinTable";
import Button from "../ui/button/Button";
import CreateCabinForm from "../components/forms/CreateCabinForm/CreateCabinForm";
import { HeadingType } from "../ui/text/@types";
import { RowType } from "../ui/row/@types";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type={RowType.horizontal}>
        <Heading as={HeadingType.H1}>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm(!showForm)}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
};

export default Cabins;
