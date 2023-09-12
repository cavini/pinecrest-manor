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
import { FieldErrors } from "./@types";

interface CreateCabinFormProps {
  cabinToEdit?: Cabin;
  closeModal?: () => void;
}

const CreateCabinForm = ({ cabinToEdit, closeModal }: CreateCabinFormProps) => {
  const { register, handleSubmit, reset, getValues, formState } =
    useForm<Cabin>({
      defaultValues: cabinToEdit?.id ? cabinToEdit : {},
    });

  console.log(cabinToEdit);

  const { errors } = formState;

  const { mutate: createCabinMutation, isLoading: isLoadingCreateCabin } =
    useMutation({
      mutationFn: (newCabin: Cabin) => createCabin(newCabin),
      onSuccess: () => {
        toast.success("Cabin successfully created");
        queryClient.invalidateQueries({ queryKey: ["cabins"] });
        reset();
      },
      onError: (err: PostgrestError) => toast.error(err.message),
    });

  const { mutate: editCabinMutation, isLoading: isLoadingEditCabin } =
    useMutation({
      mutationFn: (newCabin: Cabin) => createCabin(newCabin),
      onSuccess: () => {
        toast.success("Cabin successfully created");
        queryClient.invalidateQueries({ queryKey: ["cabins"] });
        reset();
      },
      onError: (err: PostgrestError) => toast.error(err.message),
    });

  const loading = isLoadingEditCabin || isLoadingCreateCabin;

  const onSubmit = (data: Cabin) => {
    if (cabinToEdit?.id) {
      console.log(cabinToEdit);
    }
    createCabinMutation({ ...data, image: data.image[0] });
  };

  const onError = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={loading}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={loading}
          {...register("maxCapacity", {
            required: "This field is required",

            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={loading}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={loading}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              +value <= getValues().regularPrice ||
              "Discount should be smaller than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          defaultValue=""
          disabled={loading}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <>
          <FileInput
            id="image"
            accept="image/*"
            type="file"
            disabled={loading}
            {...register("image", {
              required: "This field is required",
            })}
          />
        </>
      </FormRow>

      <FormRow>
        <Button
          variation={ButtonVariation.secondary}
          type="reset"
          disabled={loading}
          // onClick={() => closeModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={loading}>
          {" "}
          {cabinToEdit?.id ? "Update cabin" : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
