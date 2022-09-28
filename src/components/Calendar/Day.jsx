import { useRef } from "react";
import {
  DayContainer,
  DayText,
  Header,
  WeekDay,
  JobContainer,
  JobName,
} from "./Day.styled";

const Day = ({
  day,
  rowIdx,
  setPos,
  cardWidth,
  cardHeight,
  setIsJobMaking,
  setIsTranslateToRight,
}) => {
  const JobContainerRef = useRef(null);
  const handleJobClick = (e) => {
    /* mount JobMaker */
    setIsJobMaking(true);
    const dayPos = {
      left: e.target.offsetLeft,
      top: e.target.offsetTop,
    };
    const calcPosX = () => {
      if (dayPos.left - cardWidth < 0) {
        setIsTranslateToRight(true);
        return JobContainerRef.current?.clientWidth + dayPos.left;
      }
      setIsTranslateToRight(false);
      return dayPos.left - cardWidth;
    };
    const calcPosY = () => {
      if (dayPos.top - 50 + cardHeight > window.innerHeight) {
        return dayPos.top - cardHeight;
      }
      return dayPos.top - 50;
    };
    setPos({
      x: calcPosX(),
      y: calcPosY(),
    });
  };
  return (
    <DayContainer>
      <Header>
        {rowIdx === 0 && <WeekDay>{day.format("ddd").toUpperCase()}</WeekDay>}
        <DayText>{day.format("DD")}</DayText>
      </Header>
      <JobContainer onClick={handleJobClick} ref={JobContainerRef}>
        <JobName>cook</JobName>
        <JobName>study</JobName>
      </JobContainer>
    </DayContainer>
  );
};

export default Day;
