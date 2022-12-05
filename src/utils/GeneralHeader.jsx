import React from "react";
import {
  PageHeader,
  PageHeaderBg,
  PageHeaderContainer,
} from "@pages/Home/AssignTasks/AssignTasks.styled";
import { Flip } from "react-reveal";

const GeneralHeader = (props) => {
  return (
    <PageHeader>
      <PageHeaderBg />
      <PageHeaderContainer>
        <Flip left>
          <h2>{props.type}</h2>
          <div>
            UWC2.0 <span>{props.type}</span>
          </div>
        </Flip>
      </PageHeaderContainer>
    </PageHeader>
  );
};

export default GeneralHeader;
