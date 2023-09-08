import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import { Table, TableHeader } from "../../ui/Table";
import CabinRow from "./CabinRow";

export interface Cabin {
  id: number;
  created_at: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
}

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
