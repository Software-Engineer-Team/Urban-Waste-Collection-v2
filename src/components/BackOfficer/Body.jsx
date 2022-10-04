import React from "react";
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
            <h2>
              Your Clutter is
              <br /> Our Bread <span>&</span> Butter
            </h2>
            <a href="/home/assign-tasks">Assign tasks</a>
          </BodyMain>
        </BodyWrapper>
      </BodyContent>
    </BodyContainer>
  );
};

export default Body;
