import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

export const BodyContainer = styled(ScrollToBottom)`
  flex: 1;
  width: 100%;
  padding: 0.75rem;
  overflow-y: scroll;
  height: 100%;
  padding: 5rem 0;
  & > div {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BodyContent = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto 1rem auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 60vh;

  & > div {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
