import React, { useRef, useState } from "react";
import {
  AssignTasksSession,
  AssignTasksContainer,
  AssignTasksContent,
  AssignTasksButtons,
  AssignTasksList,
} from "./AssignTasksDetails.styled";
import AssignTasksForm from "./AssignTasksForm/AssignTasksForm";

const AssignTasksDetails = () => {
  const collectorsRef = useRef(null);
  const janitorsRef = useRef(null);
  const [collectorsState, setCollectorsState] = useState(true);
  const [janitorsState, setJanitorsState] = useState(false);

  const removeAllRefs = () => {
    collectorsRef.current.classList.remove("active");
    janitorsRef.current.classList.remove("active");
  };

  const closeAllStates = () => {
    setCollectorsState(false);
    setJanitorsState(false);
  };

  const chooseStackHolderHandler = (ref, cb) => {
    removeAllRefs();
    closeAllStates();
    ref.current.classList.add("active");
    cb();
  };

  return (
    <AssignTasksSession>
      <AssignTasksContainer>
        <AssignTasksContent>
          <AssignTasksButtons>
            <div
              onClick={() =>
                chooseStackHolderHandler(collectorsRef, () =>
                  setCollectorsState(true)
                )
              }
            >
              <span className="active" ref={collectorsRef}>
                Collectors
              </span>
            </div>
            <div
              onClick={() =>
                chooseStackHolderHandler(janitorsRef, () =>
                  setJanitorsState(true)
                )
              }
            >
              <span ref={janitorsRef}>Janitors</span>
            </div>
          </AssignTasksButtons>
          <AssignTasksList>
            {janitorsState && (
              <AssignTasksForm url={"/images/rubish1.jpg"} type="Janitors" />
            )}
            {collectorsState && (
              <AssignTasksForm url={"/images/rubish2.jpg"} type="Collectors" />
            )}
          </AssignTasksList>
        </AssignTasksContent>
      </AssignTasksContainer>
    </AssignTasksSession>
  );
};

export default AssignTasksDetails;
