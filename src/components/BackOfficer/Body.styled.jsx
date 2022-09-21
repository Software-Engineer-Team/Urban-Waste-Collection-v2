import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: auto;
`;
export const BodyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const BodyWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
export const BodyImageLayer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  /* background-image: url(); */
  background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const BodyMain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 30;
  h2 {
    font-family: "Amatic SC", cursive;
    font-size: 60px;
    white-space: no-wrap;
    color: #ffffff;
    margin-top: 0;
    font-weight: 700;
    line-height: 110px;
    margin-bottom: 43px;
    span {
      color: #ecdd5e;
    }
  }

  a {
    background-color: #ecdd5e;
    color: #404a3d;
    position: relative;
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
    padding: 17px 50px;
    display: inline-block;
    letter-spacing: 1.5px;
    border-radius: 5px;
    transition: all 0.35s ease-in-out;
    text-decoration: none;
    z-index: 1000;
    &:hover {
      color: #ffffff;
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
