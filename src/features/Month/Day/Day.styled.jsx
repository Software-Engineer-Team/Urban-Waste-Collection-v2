import styled from "styled-components";

export const DayContainer = styled.div`
  border-color: #dadce0;
  border-width: 1px 1px 0 0;
  display: flex;
  flex-direction: column;
  border-style: solid;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeekDay = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
  margin-top: 0.25rem;
`;

export const DayText = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  padding: 0.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

export const JobContainer = styled.div`
  /* flex: 1 1 0%; */
  flex-grow: 1;
  height: 100%;
  cursor: pointer;
`;

export const JobName = styled.div`
  color: rgb(75, 85, 99);
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.25rem;
  background-color: rgb(199, 210, 254);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.25rem;
  margin-right: 0.75rem;
  margin: 0 0.75rem 0.25rem 0.25rem;
  border-radius: 0.25rem;
`;
