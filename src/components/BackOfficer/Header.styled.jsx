import styled from "styled-components";

export const MainHeader = styled.div`
  background-color: white;
  height: 70px;
  padding-right: 36px;
  min-width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00993310;
  height: 100%;
  width: 256px;
`;

export const HeaderMiddle = styled.div`
  display: block;
  position: relative;
  width: 100%;

  & > ul {
    display: flex;
    color: black;
    justify-content: flex-start;
    align-items: center;

    & > li {
      display: inline-block;
      margin: 20px 40px 20px 0;
      position: relative;

      &:hover {
        .list {
          opacity: 1;
          visibility: visible;
          transform: translateY(20px);
        }
      }

      .dropdown {
        display: flex;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        position: relative;
        cursor: pointer;

        &:active {
          transform: scale(0.98);
        }

        &:hover {
          .text {
            color: white;
          }

          .text:before {
            transform: scaleY(1);
            border-radius: 0.25rem;
          }
        }

        .text {
          padding: 4px 10px;
          color: #737c76;
          position: relative;
          z-index: 1;
          transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.2s;

          &.active {
            background-color: #006940;
            color: white;
            border-radius: 0.25rem;
          }

          &:before {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            transform-origin: center;
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
            transform: scaleY(0);
            background-color: #006940;
            z-index: -1;
          }
        }
      }

      .list {
        width: 200px;
        position: absolute;
        display: block;
        border-radius: 0;
        top: 100%;
        transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        transform: translateY(1.15rem);
        z-index: 100;
        list-style: none;
        padding: 0;
        background-color: #006940;
        opacity: 0;
        visibility: hidden;

        & > li:last-child {
          position: relaive;

          & > div {
            color: white;
            position: absolute;
            right: 0;
            top: 10px;
            z-index: 20;
          }
          &:hover {
            .small-drop {
              opacity: 1;
              visibility: visible;
              transform: translate(210px, -40px);
            }
          }
        }

        .small-drop {
          transform: translate(230px, 0px);
          display: block;
          opacity: 0;
          visibility: hidden;
          z-index: -100;
        }

        &:after {
          position: absolute;
          top: -3px;
          left: 0px;
          right: 0;
          height: 3px;
          content: "";
          background: #fdc400;
          border-radius: 0px;
          z-index: -1;
        }

        & > li {
          position: relative;
          display: block;

          &:hover {
            & > a {
              padding-left: 40px;

              &:before {
                transform: scale(1, 1);
              }

              &:after {
                transform: scaleY(1);
              }
            }
          }

          & > a {
            position: relative;
            text-decoration: none;
            display: block;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
            padding: 10px 0px 10px;
            padding-left: 20px;
            padding-right: 10px;
            color: #ffffff;
            font-size: 14px;
            transition: all 500ms ease;
            z-index: 1;

            &:before {
              content: "";
              position: absolute;
              top: -1px;
              bottom: -1px;
              right: 0;
              left: 0;
              background-color: #1e3226;
              z-index: -1;
              transform-origin: left center;
              transition: transform 0.4s ease;
              transform: scale(0, 1);
            }

            &:after {
              content: "";
              position: absolute;
              top: 9px;
              bottom: 9px;
              left: 20px;
              border-left: 5px solid #ffffff;
              border-top: 1px solid transparent;
              border-bottom: 1px solid transparent;
              transform: scaleY(0);
              transition: all 500ms ease;
            }
          }
        }
      }
    }
  }
`;

export const LogoutBtn = styled.a`
  background-color: white;
  color: black;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  letter-spacing: 0.025rem;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    transform: scale(0.98);
  }
`;
