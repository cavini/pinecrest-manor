import { css, styled } from "styled-components";

export enum HeadingType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}

interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  as: HeadingType;
}

const Heading = styled.h1<HeadingProps>`
  ${(props) =>
    props.as === HeadingType.H1 &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === HeadingType.H2 &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === HeadingType.H3 &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  line-height: 1.4;
`;

export default Heading;
