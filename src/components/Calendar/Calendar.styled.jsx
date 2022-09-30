import styled from "styled-components";

export const Month = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(0, 1fr));
  grid-template-columns: repeat(7, minmax(0, 1fr));
  flex: 1 1 0%;
  min-height: 100vh;
`;
