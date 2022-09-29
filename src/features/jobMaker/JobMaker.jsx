import { Container, MoveLeft, MoveDown, FormCard } from "./JobMaker.styled";
import useClickOutside from "~/hook/useClickOutside";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMakingTurnOff } from "~/features/jobMaker/jobMakerSlice";

const JobMaker = () => {
  const dispatch = useDispatch();
  const [isJobMakerMount, setIsJobMakerMount] = useState(false);
  const {
    pos: jobMakerPos,
    isMaking: isJobMaking,
    isTranslateRight,
  } = useSelector((state) => state.jobMaker);
  const cardRef = useRef(null);

  useClickOutside(cardRef, (e) => {
    dispatch(isMakingTurnOff());
  });

  useEffect(() => {
    setIsJobMakerMount(isJobMaking);
  }, [isJobMaking]);

  return (
    <div>
      <Container>
        <MoveLeft posX={jobMakerPos.x}>
          <MoveDown posY={jobMakerPos.y}></MoveDown>
          <FormCard
            ref={cardRef}
            isTranslateRight={isTranslateRight}
            isJobMakerMount={isJobMakerMount}
          ></FormCard>
        </MoveLeft>
      </Container>
    </div>
  );
};

export default JobMaker;
