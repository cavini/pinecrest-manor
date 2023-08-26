import { css, styled } from "styled-components";
export enum RowType {
  horizontal = "horizontal",
  vertical = "vertical",
}

interface RowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type?: RowType;
}

const Row = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === RowType.horizontal &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === RowType.vertical &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: RowType.vertical,
};

export default Row;
