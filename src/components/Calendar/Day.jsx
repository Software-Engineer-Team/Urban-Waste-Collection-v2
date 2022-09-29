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
  setIsJobMaking,
  jobContainerRef,
  setIsTranslateToRight,
  setPos,
  cardWidth,
  cardHeight,
}) => {
  /* const JobContainerRef = useRef(null); */
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
        return jobContainerRef.current?.clientWidth + dayPos.left;
      } else {
        setIsTranslateToRight(false);
        return dayPos.left - cardWidth;
      }
    };
    const calcPosY = () => {
      /* if (dayPos.top - 50 + cardHeight > window.innerHeight) { */
      /*   return dayPos.top - cardHeight; */
      /* } */
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
      <JobContainer onClick={handleJobClick} ref={jobContainerRef}>
        <JobName>cook</JobName>
        <JobName>study</JobName>
      </JobContainer>
    </DayContainer>
  );
};

export default Day;
