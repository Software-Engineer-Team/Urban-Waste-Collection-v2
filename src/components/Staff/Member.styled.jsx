import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
  height: 635px;
  padding: 0 15px;
  margin-bottom: -30px;
  position: relative;
  display: block;

  &:hover {
    .image {
      & > img {
        transform: rotate(2deg) translateX(-0.5%) scale(1.05);
      }
      &:before {
        transform: translateY(0%);
      }
      .shape {
        transform: translateX(0%);
      }
    }

    .content {
      .box {
        .arrow {
          a {
            background-color: #558e4c;
            color: white;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .image {
    position: relative;
    height: 353px;
    overflow: hidden;
    display: block;

    & > img {
      position: relative;
      top: 0;
      height: auto;
      box-shadow: none;
      width: 100%;
      transition: all 0.7s ease-in-out;
      transition-delay: 0.1s;
      transform-origin: center;
      overflow: hidden;
    }

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      content: "";
      background-color: #404a3d80;
      width: 100%;
      height: 100%;
      transform: translate(-100%, 100%);
      transition: all 500ms ease;
      z-index: 1;
    }

    .shape {
      position: absolute;
      bottom: -6px;
      right: 0;
      transform: translateX(100%);
      transition: all 500ms ease;
      z-index: 2;

      img {
        height: auto;
        max-width: 100%;
      }
    }
  }
  .content {
    position: relative;
    display: block;
    background-color: white;
    box-shadow: 0px 10px 60px 0px rgb(0 0 0 / 5%);
    padding: 20px 50px 30px;

    .job {
      font-size: 14px;
      margin: 0;
      font-weight: 600;
      color: #878986;
      height: 30px;
      overflow-wrap: break-word;
    }
    .name {
      font-size: 40px;
      font-weight: 700;
      line-height: 42px;
      color: #404a3d;
      margin: 0;
      font-family: "Amatic SC";
    }
    .box {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      margin-top: 24px;
      border-top: 1px solid #ebe5bd;

      .social {
        display: flex;
        align-items: center;

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #404a3d;
          font-size: 16px;
          transition: all 200ms ease;

          &:hover {
            color: yellow;
          }
        }

        a + a {
          margin-left: 25px;
        }
      }

      .arrow {
        display: block;
        position: relative;

        a {
          height: 45px;
          width: 45px;
          background-color: #f5f0e9;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          color: #404a3d;
          transition: all 500ms ease;
          font-size: 18px;
        }
      }
    }
  }
`;
