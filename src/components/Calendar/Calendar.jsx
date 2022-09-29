import { getMonth } from "../Util/util.js";
import { useState, useRef } from "react";
import JobMaker from "./JobMaker";
import Month from "./Month";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [isJobMaking, setIsJobMaking] = useState(false);
  const [isTranslateToRight, setIsTranslateToRight] = useState(false);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const jobMakerCardRef = useRef(null);
  const jobContainerRef = useRef(null);

  return (
    <div>
      <div style={{ height: 70 }}></div>
      <Month
        month={currentMonth}
        setIsJobMaking={setIsJobMaking}
        jobContainerRef={jobContainerRef}
        jobMakerCardRef={jobMakerCardRef}
        setIsTranslateToRight={setIsTranslateToRight}
        setPos={setPos}
      />
      {isJobMaking && (
        <JobMaker
          posX={pos.x}
          posY={pos.y}
          cardRef={jobMakerCardRef}
          dayColWidth={jobContainerRef.current?.clientWidth}
          isJobMaking={isJobMaking}
          setIsJobMaking={setIsJobMaking}
          isTranslateToRight={isTranslateToRight}
        />
      )}
    </div>
  );
};

export default Calendar;
