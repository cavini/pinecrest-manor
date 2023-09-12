import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { FormRowOrientation } from "../../ui/form/FormRow";

export interface FormRowProps {
  label?: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  children?: any;
  orientation?: FormRowOrientation;
}
// TODO: Refactor interface
