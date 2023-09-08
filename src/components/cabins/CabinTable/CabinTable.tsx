import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCabins } from "../../../services/apiCabins";
import Spinner from "../../../ui/Spinner";
import { Table } from "../../../ui/table/Table";
import CabinRow from "../CabinRow/CabinRow";
import { Cabin } from "../@types";
import { TableHeader } from "../../../ui/table/TableHeader";

const CabinTable = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  if (isLoading) return <Spinner />;
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins?.map((cabin: Cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
};

export default CabinTable;
