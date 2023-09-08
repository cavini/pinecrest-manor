import React from "react";
import { FormRowOrientation, StyledFormRow } from "../../ui/form/FormRow";
import { FormLabel } from "../../ui/form/FormLabel";
import { FormError } from "../../ui/form/FormError";

// TODO: Refactor interface

interface FormRowProps {
  label?: string;
  error?: string;
  children?: any;
  orientation?: FormRowOrientation;
}
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
