import React from "react";
import { GrClose } from "react-icons/gr";
import {
  Container,
  MoveLeft,
  MoveDown,
  FormContainer,
  Header,
  CloseBtn,
} from "./JobMaker.styled";
import useClickOutside from "@hook/useClickOutside";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isMakingTurnOff } from "@features/JobMaker/jobMakerSlice";
import JobMakerForm from "./JobMakerForm/JobMakerForm";

const JobMaker = () => {
  const dispatch = useDispatch();
  const [isJobMakerMount, setIsJobMakerMount] = useState(false);
  const {
    pos: jobMakerPos,
    isMaking: isJobMaking,
    isTranslateRight,
  } = useSelector((state) => state.jobMaker);
  const cardRef = useRef(null);

  const handleCloseBtnClick = () => {
    dispatch(isMakingTurnOff());
  };

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
          <FormContainer
            ref={cardRef}
            isTranslateRight={isTranslateRight}
            isJobMakerMount={isJobMakerMount}
          >
            <Header>
              <CloseBtn onClick={handleCloseBtnClick}>
                <GrClose />
              </CloseBtn>
            </Header>
            <JobMakerForm></JobMakerForm>
          </FormContainer>
        </MoveLeft>
      </Container>
    </div>
  );
};

export default JobMaker;
