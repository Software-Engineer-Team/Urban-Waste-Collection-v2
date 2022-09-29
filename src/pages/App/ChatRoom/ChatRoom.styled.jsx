import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ChatRoomContainer = styled.div`
  background-image: url("/images/bodychat-bg.png");
  background-position: center;
  position: relative;
  inset: 0;
  width: 100vw;
  height: 100vh;
  &:before {
    position: absolute;
    inset: 0;
    content: "";
    background-color: #ffffffcc;
    z-index: -1;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
