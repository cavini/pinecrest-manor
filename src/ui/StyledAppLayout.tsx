import { styled } from "styled-components";

export const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

export const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
`;
