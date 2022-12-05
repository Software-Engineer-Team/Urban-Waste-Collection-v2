import { AssignContent, Icon, Title, TitleBody } from "./JobMakerForm.styled";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Fragment } from "react";
import { TbChartAreaLine } from "react-icons/tb";
const JanitorTaskForm = ({ taskTime, description, areas, mcp, janitor }) => {
  return (
    <Fragment>
      <Title>
        <TitleBody className="title-left">
          <i className="title-left-icons"></i>
        </TitleBody>
        <TitleBody className="title-right">
          <div className="title-right-content">
            <span>{description}</span>
          </div>
        </TitleBody>
      </Title>
      <AssignContent>
        <Icon>
          <i>
            <FaUserAlt />
          </i>
        </Icon>
        <div>
          <span>{janitor ? janitor.name : "Unknown"}</span>
        </div>
      </AssignContent>
      <AssignContent>
        <Icon>
          <i>
            <MdOutlineDateRange />
          </i>
        </Icon>
        <div>
          <span>
            {taskTime.day} at {taskTime.time}
          </span>
        </div>
      </AssignContent>
      <AssignContent>
        <Icon>
          <i>
            <TbChartAreaLine />
          </i>
        </Icon>
        <div>
          <span>{areas.description}</span>
        </div>
      </AssignContent>
      <AssignContent>
        <Icon>
          <i>
            <HiOutlineLocationMarker />
          </i>
        </Icon>
        <div>
          <span>{mcp.name}</span>
        </div>
      </AssignContent>
    </Fragment>
  );
};

export default JanitorTaskForm;
