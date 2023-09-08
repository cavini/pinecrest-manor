import React from "react";
import { Cabin } from "./CabinTable";
import { TableRow } from "../../ui/Table";
import { CabinText, DiscountText, PriceText } from "../../ui/Texts";
import { formatCurrency } from "../../utils";
import { useMutation } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import { queryClient } from "../../context/config";
import { PostgrestError } from "@supabase/supabase-js";
import { toast } from "react-hot-toast";
import { CabinImg } from "../../ui/StyledLogo";

interface CabinRowProps {
  cabin: Cabin;
}

const CabinRow = ({ cabin }: CabinRowProps) => {
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id: number) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err: PostgrestError) => toast.error(err.message),
  });
  return (
    <TableRow role="row">
      <CabinImg src={cabin.image} />
      <CabinText>{cabin.name}</CabinText>
      <div>Fits up to {cabin.maxCapacity}</div>
      <PriceText>{formatCurrency(cabin.regularPrice)}</PriceText>

      <DiscountText>{formatCurrency(cabin.discount)}</DiscountText>

      <button disabled={isDeleting} onClick={() => mutate(cabin.id)}>
        Delete
      </button>
    </TableRow>
  );
};

export default CabinRow;
