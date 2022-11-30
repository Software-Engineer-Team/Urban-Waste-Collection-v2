import React from "react";
import styled from "styled-components";

const LoaderWrap = ({ isPageLoading }) => {
  return (
    <LoaderWrapContainer
      isPageLoading={isPageLoading}
      className={!isPageLoading ? "hidden" : "show"}
    >
      <div className="preloader" />
      <div className="layer layer-one">
        <span className="overlay"></span>
      </div>
      <div className="layer layer-two">
        <span className="overlay"></span>
      </div>
      <div className="layer layer-three">
        <span className="overlay"></span>
      </div>
    </LoaderWrapContainer>
  );
};

export default LoaderWrap;

const LoaderWrapContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 999999;
  transition: all 1s ease-in-out;

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }

  &.show {
    visibility: visible;
    opacity: 1;
  }

  .preloader {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 999999999999999;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("https://mehedi.asiandevelopers.com/westo-demo/assets/images/icon/preloader.svg");
  }

  .layer {
    position: absolute;
    top: 0;
    width: 33.3333%;
    height: 100%;
    overflow: hidden;
    &.layer-one {
      left: 0%;
    }

    &.layer-two {
      left: 33.3333%;
    }

    &.layer-three {
      left: 66.6666%;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      ${({ isPageLoading }) =>
        !isPageLoading &&
        `
          left: 100%;
          translate3d(0px, 0px, 0px);
        `};
      width: 100%;
      height: 100%;
      background-color: #006940;
      transition: all 1s ease-in-out;
    }
  }
`;
