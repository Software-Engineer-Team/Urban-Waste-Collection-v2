import React from "react";
import { useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { checkRoleOfUser } from "@utils/util";
import {
  BodyContainer,
  BodyContent,
  BodyWrapper,
  BodyImageLayer,
  BodyMain,
} from "./Body.styled";
const Body = () => {
  const { roles } = useSelector((state) => state.user);
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
              {checkRoleOfUser(roles) && (
                <Link to="/home/task-assignment">Phân công nhiệm vụ</Link>
              )}
            </Fade>
          </BodyMain>
        </BodyWrapper>
      </BodyContent>
    </BodyContainer>
  );
};

export default Body;
