import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  pointer-events: none;
`;

export const MoveLeft = styled.div`
  margin-left: ${(props) => props.posX}px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  inset: 0;
`;

export const MoveDown = styled.div`
  max-height: ${(props) => props.posY}px;
  width: 0;
  flex-grow: 1;
`;

export const FormContainer = styled.div`
  width: 450px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 24px 38px 3px rgb(0 0 0 / 14%),
    0px 9px 46px 8px rgb(0 0 0 / 12%), 0px 11px 15px -7px rgb(0 0 0 / 20%);
  pointer-events: all;
  opacity: 0;
  transition: all 0.2s ease-in-out 0s;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transform: translateX(
    ${(props) => (props.isTranslateRight ? -50 : 50)}px
      /* props.isTranslateToRight ? -50 : 50}px */
  );
  ${({ isJobMakerMount }) =>
    isJobMakerMount &&
    `
    transform: translateX(0);
    opacity: 1;
  `}
`;

export const Header = styled.header`
  background-color: rgb(241, 243, 244);
  height: 36px;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 2px;
  right: 10px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  outline: none;
  border: 0;
  cursor: pointer;
  color: rgb(95, 99, 104);
  background-color: transparent;
  &:hover {
    background-color: #e8e9ea;
  }
`;
