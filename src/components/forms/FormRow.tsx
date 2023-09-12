import React from "react";
import { StyledFormRow } from "../../ui/form/FormRow";
import { FormLabel } from "../../ui/form/FormLabel";
import { FormError } from "../../ui/form/FormError";
import { FormRowProps } from "./@types";

const FormRow = ({ label, error, children, orientation }: FormRowProps) => {
  return (
    <StyledFormRow orientation={orientation}>
      {label && <FormLabel htmlFor={children.props.id}>{label}</FormLabel>}
      {children}
      {error && <FormError>{error}</FormError>}
    </StyledFormRow>
  );
};

export default FormRow;
