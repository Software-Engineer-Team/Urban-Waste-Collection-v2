import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #dadce0;
`;

export const MonthNav = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  font-size: 1.2rem;
  margin: auto 2rem;
  span {
    display: flex;
    align-items: center;
    color: #006940;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CurrentMonth = styled.div`
  color: #006940;
  font-weight: 700;
  font-size: 1.5rem;
`;
