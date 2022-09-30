import { getMonth } from "~/components/Util/util.js";
import { useState, useRef } from "react";
import JobMaker from "~/features/jobMaker/JobMaker";
import Month from "./Month";
import { useDispatch, useSelector } from "react-redux";

const Calendar = () => {
  const { isMaking: isJobMaking } = useSelector((state) => state.jobMaker);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <div>
      <div style={{ height: 70 }}></div>
      <Month month={currentMonth} />
      {isJobMaking && <JobMaker />}
    </div>
  );
};

export default Calendar;
