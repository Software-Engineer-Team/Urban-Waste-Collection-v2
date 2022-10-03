import React from "react";
import { Container, GridLayout } from "./Month.styled";
import Day from "./Day/Day";
import Header from "./Header/Header";
import { v4 as uuidv4 } from "uuid";

const Month = ({ month }) => {
  return (
    <Container>
      <Header />
      <GridLayout>
        {month.map((row, rowIdx) => (
          <React.Fragment key={uuidv4()}>
            {row.map((col) => (
              <Day day={col} rowIdx={rowIdx} key={uuidv4()} />
            ))}
          </React.Fragment>
        ))}
      </GridLayout>
    </Container>
  );
};

export default React.memo(Month);
