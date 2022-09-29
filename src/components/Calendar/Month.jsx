import React from "react";
import { Container } from "./Month.styled";
import Day from "./Day";
import { v4 as uuidv4 } from "uuid";

const Month = ({
  month,
  setIsJobMaking,
  jobContainerRef,
  jobMakerCardRef,
  setIsTranslateToRight,
  setPos,
}) => {
  return (
    <Container>
      {month.map((row, rowIdx) => (
        <React.Fragment key={uuidv4()}>
          {row.map((col) => (
            <Day
              day={col}
              rowIdx={rowIdx}
              setIsJobMaking={setIsJobMaking}
              jobContainerRef={jobContainerRef}
              jobMakerCardRef={jobMakerCardRef}
              setIsTranslateToRight={setIsTranslateToRight}
              setPos={setPos}
              cardWidth={jobMakerCardRef.current?.clientWidth || 500}
              cardHeight={jobMakerCardRef.current?.clientHeight}
              key={uuidv4()}
            />
          ))}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Month;
