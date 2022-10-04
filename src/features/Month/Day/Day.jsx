import React from "react";
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

const CARD_WIDTH = 450;

const Day = ({ day, rowIdx }) => {
  const jobColRef = useRef();
  const dispatch = useDispatch();
  const { isMaking } = useSelector((state) => state.jobMaker);
  const handleJobClick = (e) => {
    if (!isMaking) {
      /* mount JobMaker */
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
      dispatch(jobMakerPreMounted(calcPosX(), calcPosY(), isTranslateToRight));
    }
  };

  return (
    <DayContainer>
      <Header>
        {rowIdx === 0 && <WeekDay>{day.format("ddd").toUpperCase()}</WeekDay>}
        <DayText>{day.format("DD")}</DayText>
      </Header>
      <JobContainer ref={jobColRef}>
        <JobName onClick={handleJobClick}>Task for collector</JobName>
        <JobName>Task for janitor</JobName>
      </JobContainer>
    </DayContainer>
  );
};

export default Day;
