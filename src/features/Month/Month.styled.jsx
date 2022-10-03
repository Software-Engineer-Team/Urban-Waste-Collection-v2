import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 0%;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
`;

export const GridLayout = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-rows: repeat(5, minmax(0, 1fr));
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;
