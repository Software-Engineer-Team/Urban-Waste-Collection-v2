import {
  DayContainer,
  DayText,
  Header,
  WeekDay,
  JobContainer,
  JobName,
} from "./Day.styled";

const Day = () => {
  return (
    <DayContainer>
      <Header>
        <WeekDay>SUN</WeekDay>
        <DayText>08</DayText>
      </Header>
      <JobContainer>
        <JobName>cook</JobName>
        <JobName>study</JobName>
      </JobContainer>
    </DayContainer>
  );
};

export default Day;
