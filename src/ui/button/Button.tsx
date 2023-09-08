import { styled } from "styled-components";
import {
  ButtonProps,
  ButtonSize,
  ButtonVariation,
  sizes,
  variations,
} from "./@types";

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => props.size && sizes[props.size]}
  ${(props) => props.variation && variations[props.variation]}
`;

Button.defaultProps = {
  variation: ButtonVariation.primary,
  size: ButtonSize.medium,
};

export default Button;
