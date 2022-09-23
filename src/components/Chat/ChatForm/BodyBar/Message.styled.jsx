import styled from "styled-components";

export const MessageContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const MessageDivider = styled.div`
  padding-bottom: 0.75rem;
  height: 34.5px;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  &:before {
    height: 25px;
    background-color: #38383880;
    border-color: #38383880;
    color: #ffffffcc;
    content: attr(data-label);
    display: inline-block;
    font-size: 0.6875rem;
    line-height: 1.8;
    padding: 0.125rem 0.5rem;
    border-radius: 0.1875rem;
    border: 1px solid transparent;
    font-weight: 500;
    letter-spacing: 0.0313rem;
  }
`;

export const MessageContent = styled.div`
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ type }) => (type === "right" ? "flex-end" : "flex-start")};
`;

export const MessageWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: ${({ type }) =>
    type === "right" ? "flex-end" : "flex-start"};
  & > div {
    background-color: ${({ type }) => (type === "left" ? "#fff" : "#4eac6d3b")};
    color: "#495057";
    padding: 12px 20px;
    margin-left: ${({ type }) => (type === "left" ? "2.6rem" : "0")};
    margin-right: ${({ type }) => (type === "right" ? "2.6rem" : "0")};
    border-radius: 3px;
    box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
    text-align: left;
    max-width: 25rem;
    display: inline-block;
    font-size: 0.875rem;
    overflow-wrap: break-word;
  }
`;

export const MessageOptions = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === "right" ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  margin-top: 0.3125rem;
  font-size: 0.75rem;
  width: 13.5rem;
  justify-content: flex-start;
  height: 26px;
  span {
    line-height: 1.125rem;
    height: 1.125rem;
    margin: 0 0.5rem;
    color: #adb5bd;
  }
  & > div:first-child {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: ${({ type }) =>
      type === "right" ? "flex-end" : "center"};
    justify-content: center;
    &:before {
      display: none;
    }
    img {
      width: 36px;
      height: 36px;
    }
  }
`;

export const MessageOptionsDropDown = styled.div`
  margin: 0 0.3125rem;
  height: 1.125rem;
  line-height: 1.125rem;
  color: #adb5bd;
  font-size: 18px;
  position: relative;
  & > svg {
    cursor: pointer;
    &:hover {
      color: #5d646b;
    }
  }
`;

export const AvatarUser = styled.div`
  position: relative;
  z-index: 1;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
