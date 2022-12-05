import React, { useEffect } from "react";
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
import {
  jobMakerPreMounted,
  setCollectorTasks,
  setJanitorTasks,
  toggleIsFetching,
} from "~/features/JobMaker/jobMakerSlice";
import dayjs from "dayjs";
import { fetchData } from "~/utils/util";

const CARD_WIDTH = 450;

const Day = ({ day, rowIdx }) => {
  useEffect(() => {}, [day]);
  const jobColRef = useRef();
  const dispatch = useDispatch();
  const { isMaking } = useSelector((state) => state.jobMaker);
  const handleJobClick = async (e, type) => {
    if (!isMaking) {
      const date = dayjs(day).format("YYYY-MM-DD");

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

      let janitorTasks = [];
      let collectorTasks = [];

      if (type === "Collectors") {
        dispatch(toggleIsFetching());
        collectorTasks = await fetchData(
          `/api/collector-tasks-date?date=${date}`
        );
        dispatch(
          setCollectorTasks({
            type,
            collectorTasks,
          })
        );
      } else {
        dispatch(toggleIsFetching());
        janitorTasks = await fetchData(`/api/janitor-tasks-date?date=${date}`);
        dispatch(
          setJanitorTasks({
            type,
            janitorTasks,
          })
        );
      }
      /* dispatch( */
      /*   jobMakerPreMounted( */
      /*     calcPosX(), */
      /*     calcPosY(), */
      /*     isTranslateToRight */
      /*     type, */
      /*     janitorTasks, */
      /*     collectorTasks */
      /*   ) */
      /* ); */
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
