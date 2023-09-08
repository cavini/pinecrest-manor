export enum HeadingType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}

export interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  as: HeadingType;
}
