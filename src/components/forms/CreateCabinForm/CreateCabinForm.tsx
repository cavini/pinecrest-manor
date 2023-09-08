import { useForm } from "react-hook-form";

import React from "react";
import FormRow from "../FormRow";
import Input from "../../../ui/inputs/Input";
import { Textarea } from "../../../ui/inputs/TextArea";
import Button from "../../../ui/button/Button";
import { createCabin } from "../../../services/apiCabins";
import { toast } from "react-hot-toast";
import { queryClient } from "../../../context/config";
import { useMutation } from "@tanstack/react-query";
import { PostgrestError } from "@supabase/supabase-js";
import FileInput from "../../../ui/inputs/FileInput";
import { Form } from "../../../ui/form/Form";
import { Cabin } from "../../cabins/@types";
import { ButtonVariation } from "../../../ui/button/@types";

// interface CreateCabinFormProps {
//   cabinToEdit: Cabin;
//   closeModal?: () => void;
// }

const CreateCabinForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: (newCabin: Cabin) => createCabin(newCabin),
    onSuccess: () => {
      toast.success("Cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err: PostgrestError) => toast.error(err.message),
  });

  // TODO: Fix any type later
  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name">
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name")}
        />
      </FormRow>

      <FormRow label="Maximum capacity">
        <Input
          type="number"
          id="maxCapacity"
          disabled={isLoading}
          {...register("maxCapacity")}
        />
      </FormRow>

      <FormRow label="Regular price">
        <Input
          type="number"
          id="regularPrice"
          disabled={isLoading}
          {...register("regularPrice")}
        />
      </FormRow>

      <FormRow label="Discount">
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isLoading}
          {...register("discount")}
        />
      </FormRow>

      <FormRow label="Description for website">
        <Textarea
          id="description"
          defaultValue=""
          disabled={isLoading}
          {...register("description")}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          disabled={isLoading}
          {...register("image")}
        />
      </FormRow>

      <FormRow>
        <Button
          variation={ButtonVariation.secondary}
          type="reset"
          disabled={isLoading}
          // onClick={() => closeModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Add cabin</Button>
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
