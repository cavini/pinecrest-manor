import React, { useState } from "react";
import { CabinText, DiscountText, PriceText } from "../../../ui/text/Texts";
import { formatCurrency } from "../../../utils";
import { useMutation } from "@tanstack/react-query";
import { deleteCabin } from "../../../services/apiCabins";
import { queryClient } from "../../../context/config";
import { PostgrestError } from "@supabase/supabase-js";
import { toast } from "react-hot-toast";
import { CabinImg } from "../../../ui/cabin";
import { CabinRowProps } from "./@types";
import { TableRow } from "../../../ui/table/TableRow";
import CreateCabinForm from "../../forms/CreateCabinForm/CreateCabinForm";

const CabinRow = ({ cabin }: CabinRowProps) => {
  const [showForm, setShowForm] = useState(false);
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
    <>
      <TableRow role="row">
        <CabinImg src={cabin.image} />

        {/* implement logic for the File not chosen text
        
        When editing, user should be able to update the picture of the cabin, to make that decisin the user should be able
        to see what is the image */}
        <CabinText>{cabin.name}</CabinText>
        <div>Fits up to {cabin.maxCapacity}</div>
        <PriceText>{formatCurrency(cabin.regularPrice)}</PriceText>

        <DiscountText>{formatCurrency(cabin.discount)}</DiscountText>
        <div>
          <button disabled={isDeleting} onClick={() => setShowForm(!showForm)}>
            Edit
          </button>
          <button disabled={isDeleting} onClick={() => mutate(cabin.id)}>
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

export default CabinRow;
