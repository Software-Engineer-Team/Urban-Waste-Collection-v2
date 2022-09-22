import styled from "styled-components";

export const PageHeader = styled.section`
  position: relative;
  padding: 123px 0 120px;
  z-index: 1;
  width: 100%;
`;
export const PageHeaderBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("/images/assign-tasks-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
  &:before {
    position: absolute;
    inset: 0;
    content: "";
    background-color: rgba(53, 62, 50, 0.8);
    z-index: -1;
  }
`;
export const PageHeaderContainer = styled.div`
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  overflow-wrap: break-word;
  h2 {
    font-size: 60px;
    color: #ffffff;
    line-height: 60px;
    letter-spacing: 10px;
    margin-bottom: 13px;
    font-weight: 700;
    margin: 13px 0;
    font-family: "Amatic SC", cursive;
  }
  div {
    font-size: 18px;
    color: #ecdd5e;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
    span {
      position: relative;
      color: #ecdd5e;
      margin-left: 35px;
      &:before {
        position: absolute;
        top: 10px;
        left: -26px;
        content: "";
        background-color: #ecdd5e;
        height: 2px;
        width: 15px;
      }
    }
  }
`;

export const AssignTasksHeader = styled.section`
  position: relative;
  display: block;
  padding: 112px 0 100px;
  width: 100%;
  div.container {
    padding: 0 15px;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    div.row {
      h2 {
        font-size: 60px;
        line-height: 60px;
        font-weight: 600;
        font-family: "Amatic SC", cursive;
        color: #404a3d;
        margin: 0 0 32px 0;
      }
      p {
        margin: 0;
        font-size: 18px;
        color: #878986;
        line-height: 34px;
        overflow-wrap: break-word;
        a {
          cursor: pointer;
          color: #404a3d;
          text-decoration: none;
          transition: color 0.15s ease-in;
          &:hover {
            color: #558e4c;
          }
        }
      }
    }
  }
`;
