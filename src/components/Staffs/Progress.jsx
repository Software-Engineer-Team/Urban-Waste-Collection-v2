import React from "react";
import styled from "styled-components";

const Progress = (props) => {
  return (
    <Container countText={props.countText}>
      <h4 className="title">{props.title}</h4>
      <div className="bar">
        <div className="bar-inner">
          <div className="count-text">{props.countText}</div>
        </div>
      </div>
    </Container>
  );
};

export default Progress;

export const Container = styled.div`
  h4 {
    margin: 0;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    line-height: 28px;
    color: #404a3d;
    margin-bottom: 6px;
  }

  .bar {
    margin-bottom: 22px;
    position: relative;
    width: 100%;
    height: 13px;
    background-color: #f5f0e9;
    border-radius: 7px;
    .bar-inner {
      transition: all 1500ms ease;

      width: ${({ countText }) => countText};

      background-color: #ecdd5e;
      position: relative;
      display: block;
      height: 13px;
      border-radius: 7px;

      .count-text {
        position: absolute;
        right: 0px;
        bottom: 21px;
        color: #878986;
        line-height: 24px;
        font-size: 14px;
        text-align: center;
        font-weight: 500;
      }
    }
  }
`;
