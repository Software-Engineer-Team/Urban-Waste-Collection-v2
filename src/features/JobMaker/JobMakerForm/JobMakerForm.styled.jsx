import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
  flex: 1 1 0%;
`;

export const Title = styled.div`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  display: flex;
  margin-bottom: 12px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const TitleBody = styled.div`
  width: 100%;

  &.title-left {
    margin-left: 14px;
    margin-bottom: 4px;
    border-radius: 4px;
    height: 14px;
    width: 14px;
    background-color: rgb(11, 128, 67);
  }

  &.title-right {
    margin-left: 14px;
    .title-right-content {
      font-size: 28px;
      color: #3c4043;
    }
  }
`;

export const AssignContent = styled.div`
  display: flex;
  min-height: 32px;
  width: 100%;
  padding-right: 16px;
  align-items: center;

  & > div:last-child {
    padding: 6px 0;
  }
`;

export const Icon = styled.div`
  width: 40px;
  max-height: 52px;
  color: #5f6368;
  margin-left: 19px;

  i {
    font-size: 20px;
  }
`;
