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
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useSelector((state) => state.month);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div>
      <div style={{ height: 70 }}></div>
      <Container>
        <Sidebar />
        <Month month={currentMonth} />
        {isJobMaking && <JobMaker />}
      </Container>
    </div>
  );
};

export default Calendar;
