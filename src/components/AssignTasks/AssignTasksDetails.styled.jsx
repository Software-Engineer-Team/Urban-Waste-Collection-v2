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
export const AssignTasksListForm = styled.form`
  position: relative;
  border: 1px solid #ebe5dd;
  padding: 50px;
`;
export const AssignTasksListCheckBoxes = styled.div`
  position: relative;
  ul {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0;
    list-style: none;
    flex-wrap: wrap;
    li {
      padding: 0 15px;
      label {
        position: relative;
        z-index: 10;
        font-size: 16px;
        font-weight: 500;
        padding-left: 35px;
        cursor: pointer;
        margin-bottom: 0.5rem;
        display: inline-block;
        input {
          display: none;
        }
        span {
          font-size: 16px;
          color: #404a3d;
          font-weight: 500;
          cursor: pointer;
          &.active {
            &:before {
              background-color: #558e4c;
            }
            svg {
              color: white;
            }
          }
          svg {
            position: absolute;
            top: 4px;
            left: 5px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            color: white;
          }
          &:before {
            transition: all 0.25s ease-in-out;
            content: "";
            border: 1px solid #ebe5dd;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            position: absolute;
            top: 0px;
            left: 0;
            &:active {
            }
          }
        }
      }
    }
  }
`;
export const AssignTasksListImg = styled.div`
  position: relative;
  max-width: 410px;
  width: 100%;
  margin-top: 27px;
  img {
    margin-left: 15px;
    height: auto;
    max-width: 100%;
    border-radius: 0;
    box-shadow: 0;
  }
`;
export const AssignTasksListFormContent = styled.div`
  display: block;
  position: relative;
  margin-top: 30px;
`;
export const AssignTasksListFormRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const AssignTasksListFormCol = styled.div`
  width: 50%;
  padding: 15px;

  .date {
  }
`;

export const AssignTasksListFormInputSelect = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 0;
  select {
    display: none;
  }
  div.btn {
    cursor: pointer;
    position: relative;
    height: 63px;
    background-color: #f5f0e9;
    padding: 0 15px;
    font-size: 14px;
    line-height: 63px;
    font-weight: 500;
    color: #878986;
    span {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      right: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-weight: 900;
        font-size: 30px;
      }
    }
  }
  div.drop-down {
    display: none;
    transition: all 0.3s ease-in-out;
    &.show-drop-down {
      display: block;
    }
    z-index: 1;

    font-family: "DM Sans";
    font-size: 600;
    position: absolute;
    width: 100%;
    top: 0;
    transform: translate(0px, 65px);
    overflow: hidden;
    min-height: 117px;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    div {
      transition: all 0.4s ease-in-out;
      padding: 6px 20px;
      font-size: 16px;
      font-weight: 500;
      background-color: #404a3d;
      white-space: nowrap;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      cursor: pointer;
      span {
        transition: all 0.3s ease-in-out;
        color: #212529;
      }
    }
    div:hover {
      background-color: #558e4c;
      span {
        color: #fff;
      }
    }
    /* div.selected { */
    /*   background-color: #558e4c; */
    /*   span { */
    /*     color: #fff; */
    /*   } */
    /* } */
  }
`;

export const AssignTasksListFormInputText = styled.input`
  position: relative;
  /* cursor: pointer; */
  height: 63px;
  width: ${({ wid }) => wid};
  outline-style: none;
  border: 0;
  background-color: #f5f0e9;
  padding: 0 15px;
  font-size: 14px;
  line-height: 63px;
  font-weight: 500;
  color: #878986;
`;

export const AssignTasksListFormInputTextArea = styled.textarea`
  position: relative;
  height: 249px;
  width: 100%;
  outline-style: none;
  border: 0;
  background-color: #f5f0e9;
  padding: 25px 30px 30px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  color: #878986;
  resize: none;
`;

export const AssignTasksListFormDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const AssignTasksListFormBtn = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 15px;
  z-index: 30;
  a {
    background-color: #ecdd5e;
    color: #404a3d;
    position: relative;
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
    padding: 15px 50px;
    letter-spacing: 1.5px;
    border-radius: 5px;
    transition: all 0.35s ease-in-out;
    box-sizing: border-box;
    text-decoration: none;
    z-index: 1000;
    border: 0;
    &:hover {
      color: #ffffff;
      background-color: transparent;
      &:after {
        transform: scale(1);
        background-color: #558e4c;
        opacity: 1;
      }
    }
    &:after {
      transition: all 0.35s ease-in-out;
      border-radius: 5px;
      content: "";
      position: absolute;
      transform-origin: center;
      inset: 0;
      transform: scale(0);
      z-index: -1;
      opacity: 0;
    }
  }
`;
