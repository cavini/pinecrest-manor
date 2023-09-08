import { css, styled } from "styled-components";
import { RowProps, RowType } from "./@types";

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
