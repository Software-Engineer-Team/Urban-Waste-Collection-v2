import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 120px auto 90px;
  padding: 0 150px;
  position: relative;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .member-detail {
    height: 836px;

    .member-body {
      display: flex;
      height: 596px;
      position: relative;

      .member-body-right {
        width: 597px;
        padding: 0 15px;
        margin-left: 70px;

        .content {
          position: relative;
          margin-top: -9px;

          p,
          h3 {
            margin: 0;
          }

          .title {
            padding-bottom: 4px;
            color: #878986;
            font-size: 20px;
            font-weight: 600;
          }
          .name {
            font-size: 60px;
            font-weight: 600;
            line-height: 70px;
            font-family: "Amatic SC";
            letter-spacing: 3.2px;
          }

          .social {
            display: flex;
            align-items: center;
            margin-top: 28px;
            margin-bottom: 28px;
            a {
              text-decoration: none;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #404a3d;
              font-size: 16px;
              width: 45px;
              height: 45px;
              border-radius: 50%;
              background-color: #f5f0e9;
              transition: all 200ms ease;

              &:hover {
                background-color: #558e4c;
                color: white;
              }
            }
            a + a {
              margin-left: 25px;
            }
          }
          .text1 {
            font-size: 30px;
            color: #558e4c;
            font-weight: 700;
            line-height: 46px;
          }

          .text2,
          .text3 {
            font-size: 20px;
            line-height: 34px;
            color: #878986;
          }
          .text2 {
            padding-top: 31px;
            padding-bottom: 33px;
          }
        }
      }

      .member-body-left {
        padding: 0 15px;

        .img {
          display: block;
          position: relative;
          top: 0;
          height: 100%;

          img {
            position: relative;
            height: 596px;
          }
        }
      }
    }

    .member-body-bottom {
      display: flex;
      position: relative;
      border-top: 1px solid #ebe5dd;
      padding: 120px 12px;
      margin-top: 120px;

      .member-body-bottom-left {
        padding: 0 12px;

        h2 {
          margin: 0;
        }

        .tagline {
          position: relative;
          display: inline-block;
          color: #558e4c;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          margin-top: 2px;

          &:before {
            position: absolute;
            top: 13px;
            right: -29px;
            background-color: #ecdd5e;
            width: 20px;
            height: 2px;
            content: "";
          }
        }

        .title {
          width: 520px;
          font-size: 60px;
          line-height: 73px;
          font-weight: 700;
          color: #404a3d;
          font-family: "Amatic SC";
          overflow-wrap: break-word;
        }
      }
    }

    .member-body-bottom-right {
      padding: 0 12px;
      width: 100%;
      position: relative;
      margin-top: 3px;
      margin-left: 70px;
    }
  }
`;
