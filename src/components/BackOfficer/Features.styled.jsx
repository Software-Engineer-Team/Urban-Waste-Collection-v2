import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  display: block;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  bottom: 300px;
  padding: 0 15px;
`;

export const Body = styled.div`
  position: relative;
  display: block;
  background-color: #404a3d;
  padding: 88px 0 74px;
  margin-top: 180px;

  & > ul {
    list-style: none;
    padding: 0;
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
      position: relative;
      flex: 0 0 25%;
      max-width: 25%;
      width: 100%;
      text-align: center;

      .icon {
        position: absolute;
        height: 130px;
        width: 130px;
        background-color: #558e4c;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        top: -160px;
        left: 0;
        right: 0;
        margin: 0 auto;
        cursor: pointer;
        svg {
          font-size: 65px;
          transition: all 0.65s ease-in-out;
          position: relative;
          color: white;
          z-index: 1;
        }
        &:hover {
          svg {
            color: #000000;
            transform: scale(0.9);
          }
          &:after {
            transform: scale(1);
            background-color: #ecdd5e;
            opacity: 1;
          }
        }
        &:after {
          transition: all 0.35s ease-in-out;
          border-radius: 50%;
          content: "";
          position: absolute;
          transform-origin: center;
          inset: 0;
          transform: scale(0);
          opacity: 0;
        }
      }

      h3 {
        margin: 0;
        font-family: "Amatic SC";
        &:hover {
          a {
            color: #ecdd5e;
          }
        }

        a {
          color: #ffffff;
          transition: all 0.35s ease-in-out;
          text-decoration: none;
          font-size: 36px;
          font-weight: 600;
          line-height: 40px;
          margin-top: 3px;
          cursor: pointer;
        }
      }

      &:before {
        position: absolute;
        top: 7px;
        bottom: 6px;
        right: 0;
        content: "";
        width: 1px;
        background-color: #ffffff1a;
      }
    }
  }
`;
