import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DayContainer,
  DayText,
  Header,
  WeekDay,
  JobContainer,
  JobName,
} from "./Day.styled";
import { jobMakerPreMounted } from "~/features/JobMaker/jobMakerSlice";
import dayjs from "dayjs";
import { fetchData } from "~/utils/util";

const CARD_WIDTH = 450;

const Day = ({ day, rowIdx, janitorTasks, collectorTasks }) => {
  useEffect(() => {}, [day]);
  const jobColRef = useRef();
  const dispatch = useDispatch();
  const { isMaking } = useSelector((state) => state.jobMaker);
  /* console.log(day); */
  const handleJobClick = (e, type) => {
    if (!isMaking) {
      const colPos = {
        left: e.target.offsetLeft,
        top: e.target.offsetTop,
      };
      let isTranslateToRight = false;
      const calcPosX = () => {
        const colWidth = jobColRef.current?.clientWidth;
        if (colPos.left - CARD_WIDTH < 0) {
          isTranslateToRight = true;
          return colWidth + colPos.left;
        } else {
          isTranslateToRight = false;
          return colPos.left - CARD_WIDTH;
        }
      };
      const calcPosY = () => {
        return colPos.top - 50;
      };
      dispatch(
        jobMakerPreMounted(
          calcPosX(),
          calcPosY(),
          isTranslateToRight,
          type,
          janitorTasks,
          collectorTasks
        )
      );
    }
  };

  return (
    <DayContainer>
      <Header>
        {rowIdx === 0 && <WeekDay>{day.format("dddd").toUpperCase()}</WeekDay>}
        <DayText>{day.format("DD")}</DayText>
      </Header>
      <JobContainer ref={jobColRef}>
        <JobName onClick={(e) => handleJobClick(e, "Collectors")}>
          Task for collectors
        </JobName>
        <JobName onClick={(e) => handleJobClick(e, "Janitors")}>
          Task for janitors
        </JobName>
      </JobContainer>
    </DayContainer>
  );
};

export default Day;
