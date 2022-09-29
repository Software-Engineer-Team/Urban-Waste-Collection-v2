import React from "react";
import { Container } from "./Month.styled";
import Day from "./Day";
import { v4 as uuidv4 } from "uuid";

const Month = ({ month }) => {
  return (
    <Container>
      {month.map((row, rowIdx) => (
        <React.Fragment key={uuidv4()}>
          {row.map((col) => (
            <Day day={col} rowIdx={rowIdx} key={uuidv4()} />
          ))}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default React.memo(Month);
/* export default Month; */
