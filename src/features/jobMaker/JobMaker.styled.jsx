import styled from "styled-components";

export const DayContainer = styled.div`
  border-color: #dadce0;
  border-width: 0.5px;
  display: flex;
  flex-direction: column;
  border-style: solid;
`;

export const StaticPos = styled.div`
  top: 0;
  left: 0;
  width: 0 !important;
  height: 0 !important;
  position: absolute;
`;

export const Container = styled.div`
  z-index: 100;
  width: 100%;
  top: 0;
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

export const FormCard = styled.form`
  width: 450px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 24px 38px 3px rgb(0 0 0 / 14%),
    0px 9px 46px 8px rgb(0 0 0 / 12%), 0px 11px 15px -7px rgb(0 0 0 / 20%);
  pointer-events: all;
  opacity: 0;
  transition: all 0.2s ease-in-out 0s;
  border-radius: 8px;
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

export const FormHeader = styled.header`
  background-color: rgb(241, 243, 244);
  height: 36px;
  position: relative;
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
  background-color: transparent;
  &:hover {
    background-color: #E8E9EA;
  }
`;
