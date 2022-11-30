import React from "react";
import { Container } from "./Calendar.styled.jsx";
import JobMaker from "@features/JobMaker/JobMaker";
import Month from "@features/Month/Month";
import Sidebar from "./Sidebar/Sidebar.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMonth } from "@utils/util";

const Calendar = () => {
  const { isMaking: isJobMaking } = useSelector((state) => state.jobMaker);
  const [currentMonth, setCurrentMonth] = useState([[]]);
  const { monthIndex } = useSelector((state) => state.month);
  useEffect(() => {
    console.log("ssssssssssssssssssssss");
    getMonth(false, monthIndex).then((data) => {
      setCurrentMonth(data);
    });
    getMonth(true, monthIndex).then((data) => {
      setCurrentMonth(data);
    });
  }, [monthIndex]);

  useEffect(() => {
    getMonth(false).then((data) => {
      setCurrentMonth(data);
    });
    getMonth(true).then((data) => {
      setCurrentMonth(data);
    });
  }, []);

  return (
    <div>
      <div style={{ height: 70 }}></div>
      <Container>
        {/* <Sidebar /> */}
        <Month month={currentMonth} />
        {isJobMaking && <JobMaker />}
      </Container>
    </div>
  );
};

export default Calendar;
