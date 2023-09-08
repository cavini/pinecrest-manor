import { css, styled } from "styled-components";

export enum FormRowOrientation {
  vertical = "vertical",
  horizontal = "horizontal",
}

interface StyledFormRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  orientation?: FormRowOrientation;
}

export const StyledFormRow = styled.div<StyledFormRowProps>`
  display: grid;
  align-items: center;

  grid-template-columns: ${(props) =>
    props.orientation === FormRowOrientation.vertical
      ? "1fr"
      : "24rem 1fr 1.2fr"};
  gap: ${(props) =>
    props.orientation === FormRowOrientation.vertical ? "0.8rem" : "2.4rem"};

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: ${(props) =>
      props.orientation === "vertical"
        ? "none"
        : "1px solid var(--color-grey-100)"};
  }

  ${(props) =>
    props.orientation !== "vertical" &&
    css`
      &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
      }
    `}
`;

StyledFormRow.defaultProps = {
  orientation: FormRowOrientation.horizontal,
};
