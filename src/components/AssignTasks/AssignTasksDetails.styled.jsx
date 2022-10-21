import styled from "styled-components";

export const AssignTasksSession = styled.section`
  position: relative;
  padding-bottom: 120px;
  width: 100%;
`;
export const AssignTasksContainer = styled.div`
  position: relative;
  display: block;
  /* padding: 112px 0 100px; */
  width: 100%;
`;
export const AssignTasksContent = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  position: relative;
  display: block;
`;
export const AssignTasksButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* margin-bottom: -10px; */
  div {
    padding: 0 5px 10px 5px;
    span {
      background-color: #f5f0e9;
      color: #404a3d;
      position: relative;
      display: inline-block;
      z-index: 1;
      font-size: 16px;
      cursor: pointer;
      padding: 13px 60px 13px;
      text-align: center;
      font-weight: 700;
      transition: all 0.2s ease-in-out;
      &:before {
        transition: all 0.2s ease-in-out;
        position: absolute;
        content: "";
        inset: 0;
        background-color: #558e4c;
        transform-origin: top;
        transform: scaleY(0);
        z-index: -1;
      }
      &.active {
        color: #ffffff;
        &:before {
          transform: scaleY(1);
          background-color: #558e4c;
        }
      }
    }
  }
`;
export const AssignTasksList = styled.div`
  padding: 5px;
`;
