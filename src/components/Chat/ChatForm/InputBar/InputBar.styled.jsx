import styled from "styled-components";
export const ChatFooter = styled.form`
  display: flex;
  z-index: 10;
  height: 5rem;
  padding: 0.75rem 1.25rem;
  background-color: #ffffffcc;
  border-top: 1px solid #eaeaf1;
  position: fixed;
  bottom: 0;
  width: calc(100% - 300px);
  backdrop-filter: blur(7px);
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    cursor: pointer;
    align-self: center;
    height: 60%;
    border-style: none;
    border: 1 solid #4eac6d;
    padding: 0.1rem;
    margin-left: 0.5rem;
    background-color: #4eac6de6;

    border-radius: 4px;
    &:hover {
      background-color: #4eac6d;
    }
    &:active {
      transform: scale(0.965);
    }
    svg {
      color: white;
    }
  }

  svg {
    font-size: 1.5rem;
    color: #797c8c;
  }

  @media screen and (max-width: 1200px) {
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  width: 100%;
  & div.enter-text {
    width: 100%;
    min-height: 35px;
    input {
      width: 100%;
      padding: 6px 12px;
      background-color: #ffffff;
      border: 0;
      font-size: 1rem;
      border: 1px solid #e6ebf5;
      border-radius: 0.25rem;
      color: #495057;
      &:focus {
        outline: none;
      }
    }
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.75rem;
    position: relative;
    & > div {
      position: absolute;
      bottom: 30px;
      right: 0;
    }
    &:hover {
      svg {
        color: #5d646b;
        cursor: pointer;
      }
    }
  }
  & div.images,
  & div.attachment {
    & svg {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
  }
`;
