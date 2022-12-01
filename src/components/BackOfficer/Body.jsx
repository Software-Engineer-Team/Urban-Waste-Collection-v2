import React from "react";
import { Fade } from "react-reveal";
import {
  BodyContainer,
  BodyContent,
  BodyWrapper,
  BodyImageLayer,
  BodyMain,
} from "./Body.styled";
const Body = () => {
  return (
    <BodyContainer>
      <BodyContent>
        <BodyWrapper>
          <BodyImageLayer></BodyImageLayer>
          <BodyMain>
            <Fade top>
              <h2>
                Hệ thống
                <br /> thu gom <span>rác thải</span> đô thị
              </h2>
            </Fade>
            <Fade bottom>
              <a href="/home/task-assignment">Phân công nhiệm vụ</a>
            </Fade>
          </BodyMain>
        </BodyWrapper>
      </BodyContent>
    </BodyContainer>
  );
};

export default Body;
