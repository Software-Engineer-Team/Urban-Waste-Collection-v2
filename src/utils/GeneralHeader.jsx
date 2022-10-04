import React from "react";
import {
  PageHeader,
  PageHeaderBg,
  PageHeaderContainer,
} from "@pages/Home/AssignTasks/AssignTasks.styled";

const GeneralHeader = (props) => {
  return (
    <PageHeader>
      <PageHeaderBg />
      <PageHeaderContainer>
        <h2>{props.type}</h2>
        <div>
          UWC2.0 <span>{props.type}</span>
        </div>
      </PageHeaderContainer>
    </PageHeader>
  );
};

export default GeneralHeader;
