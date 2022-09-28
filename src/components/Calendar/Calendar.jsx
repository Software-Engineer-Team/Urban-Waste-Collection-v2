import React from "react";
import { Month } from "./Calendar.styled";
import Day from "./Day";
import { getMonth } from "../Util/util.js";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import JobMaker from "./JobMaker";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [isJobMaking, setIsJobMaking] = useState(false);
  const [isTranslateToRight, setIsTranslateToRight] = useState(false);
  const jobMakerCardRef = useRef(null);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div>
      <div style={{ height: 70 }}></div>
      <Month>
        {currentMonth.map((row, rowIdx) => (
          <React.Fragment key={uuidv4()}>
            {row.map((col) => (
              <Day
                day={col}
                rowIdx={rowIdx}
                setPos={setPos}
                setIsJobMaking={setIsJobMaking}
                cardWidth={jobMakerCardRef.current?.clientWidth}
                cardHeight={jobMakerCardRef.current?.clientHeight}
                setIsTranslateToRight={setIsTranslateToRight}
                key={uuidv4()}
              />
            ))}
          </React.Fragment>
        ))}
      </Month>
      {isJobMaking && (
        <JobMaker
          posX={pos.x}
          posY={pos.y}
          cardRef={jobMakerCardRef}
          isJobMaking={isJobMaking}
          setIsJobMaking={setIsJobMaking}
          isTranslateToRight={isTranslateToRight}
        />
      )}
    </div>
  );
};

export default Calendar;
