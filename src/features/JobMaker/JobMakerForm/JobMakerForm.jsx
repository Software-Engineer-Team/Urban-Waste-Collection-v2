import React, { Fragment } from "react";
import { FaRoute, FaUserAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbChartAreaLine } from "react-icons/tb";
import {
  AssignContent,
  Container,
  Icon,
  Title,
  TitleBody,
} from "./JobMakerForm.styled";

const JobMakerForm = ({ type, janitorTasks, collectorTasks }) => {
  console.log(janitorTasks, collectorTasks, type);
  return (
    <Container>
      {type === "Janitors" ? (
        <>
          {janitorTasks.map(
            ({ taskTime, description, areas, mcp, janitor }, idx) => {
              return (
                <Fragment key={idx}>
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
            }
          )}
        </>
      ) : (
        <>
          {collectorTasks.map(
            ({ description, taskTime, collector, route }, idx) => {
              return (
                <Fragment key={idx}>
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
            }
          )}
        </>
      )}
    </Container>
  );
};

export default JobMakerForm;
