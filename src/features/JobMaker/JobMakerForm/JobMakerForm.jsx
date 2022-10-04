import React from "react";
import { BsTrash } from "react-icons/bs";
import { MdNotes, MdOutlineDateRange } from "react-icons/md";
import { TbChartAreaLine } from "react-icons/tb";
import {
  AssignContent,
  Container,
  Icon,
  Name,
  Title,
  TitleBody,
} from "./JobMakerForm.styled";

const JobMakerForm = () => {
  return (
    <Container>
      <Title>
        <TitleBody className="title-left">
          <i className="title-left-icons"></i>
        </TitleBody>
        <TitleBody className="title-right">
          <div className="title-right-content">
            <span>Task information</span>
          </div>
        </TitleBody>
      </Title>
      <AssignContent>
        <Icon>
          <i>
            <MdOutlineDateRange />
          </i>
        </Icon>
        <div>
          <span>Thursday, September 1</span>
        </div>
      </AssignContent>
      <AssignContent>
        <Icon>
          <i>
            <TbChartAreaLine />
          </i>
        </Icon>
        <div>
          <span>Area 1</span>
        </div>
      </AssignContent>
      <AssignContent>
        <Icon>
          <i>
            <BsTrash />
          </i>
        </Icon>
        <div>
          <span>Collection Point 1</span>
        </div>
      </AssignContent>
      <AssignContent></AssignContent>
      {/* <Name>Loc Kiet Kiet</Name> */}
    </Container>
  );
};

export default JobMakerForm;
