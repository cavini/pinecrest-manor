export enum RowType {
  horizontal = "horizontal",
  vertical = "vertical",
}

export interface RowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type?: RowType;
}
