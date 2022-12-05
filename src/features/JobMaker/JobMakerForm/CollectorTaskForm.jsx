import { AssignContent, Icon, Title, TitleBody } from "./JobMakerForm.styled";
import React from "react";
import { FaRoute, FaUserAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Fragment } from "react";
const CollectorTaskForm = ({ description, taskTime, collector, route }) => {
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
          <span>{collector ? collector.name : "Unknown"}</span>
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
            <HiOutlineLocationMarker />
          </i>
        </Icon>
        <div>
          <span>{route?.mcp?.name}</span>
        </div>
      </AssignContent>
      <AssignContent>
        <Icon>
          <i>
            <FaRoute />
          </i>
        </Icon>
        <div>
          <span>{route.name}</span>
        </div>
      </AssignContent>
    </Fragment>
  );
};

export default CollectorTaskForm;
