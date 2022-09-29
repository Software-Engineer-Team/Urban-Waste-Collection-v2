import { Container, MoveLeft, MoveDown, FormCard } from "./JobMaker.styled";
import useClickOutside from "~/hook/useClickOutside";
import { useEffect, useState } from "react";

const JobMaker = ({
  posX,
  posY,
  cardRef,
  isJobMaking,
  setIsJobMaking,
  isTranslateToRight,
  dayColWidth,
}) => {
  const [isJobMakerMount, setIsJobMakerMount] = useState(false);
  useClickOutside(cardRef, (e) => {
    setIsJobMaking(false);
  });

  useEffect(() => {
    setIsJobMakerMount(isJobMaking);
  }, [isJobMaking]);

  return (
    <div>
      <Container>
        <MoveLeft posX={posX}>
          <MoveDown posY={posY}></MoveDown>
          <FormCard
            ref={cardRef}
            isTranslateToRight={isTranslateToRight}
            isJobMakerMount={isJobMakerMount}
            dayColWidth={dayColWidth}
          ></FormCard>
        </MoveLeft>
      </Container>
    </div>
  );
};

export default JobMaker;
