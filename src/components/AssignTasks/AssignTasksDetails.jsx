import React from "react";
import {
  AssignTasksSession,
  AssignTasksContainer,
  AssignTasksContent,
  AssignTasksButtons,
  AssignTasksList,
  AssignTasksListForm,
  AssignTasksListCheckBoxes,
  AssignTasksListImg,
  AssignTasksListFormContent,
  AssignTasksListFormRow,
  AssignTasksListFormCol,
  AssignTasksListFormInputSelect,
  AssignTasksListFormInputText,
  AssignTasksListFormInputTextArea,
  AssignTasksListFormDate,
  AssignTasksListFormBtn,
} from "./AssignTasksDetails.styled";
import { TiTick } from "react-icons/ti";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { useRef, useState } from "react";

const AssignTasksDetails = () => {
  const collectorsRef = useRef(null);
  const janitorsRef = useRef(null);
  const [dropDownUsers, setDropDownUsers] = useState(false);

  const removeAllRefs = () => {
    collectorsRef.current.classList.remove("active");
    janitorsRef.current.classList.remove("active");
  };

  const clickCollectorsHandler = (e) => {
    removeAllRefs();
    collectorsRef.current.classList.add("active");
    console.log(collectorsRef.current.classList.contains("active"));
  };

  const clickJanitorsHandler = (e) => {
    removeAllRefs();
    janitorsRef.current.classList.add("active");
  };

  const showDropDownUsers = (e) => {
    setDropDownUsers((oldDrop) => !oldDrop);
  };

  return (
    <AssignTasksSession>
      <AssignTasksContainer>
        <AssignTasksContent>
          <AssignTasksButtons>
            <div onClick={clickCollectorsHandler}>
              <span className="active" ref={collectorsRef}>
                Collectors
              </span>
            </div>
            <div onClick={clickJanitorsHandler}>
              <span ref={janitorsRef}>Janitors</span>
            </div>
          </AssignTasksButtons>
          <AssignTasksList>
            <AssignTasksListForm>
              <AssignTasksListCheckBoxes>
                <ul>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span className="active">
                        32 Gallon
                        <TiTick />
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span>
                        64 Gallon
                        <TiTick />
                      </span>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="checkbox" />
                      <span>
                        92 Gallon
                        <TiTick />
                      </span>
                    </label>
                  </li>
                </ul>
              </AssignTasksListCheckBoxes>
              <AssignTasksListImg>
                <img src="/images/rubish1.jpg" alt="Rubish" />
              </AssignTasksListImg>
              <AssignTasksListFormContent>
                <AssignTasksListFormRow>
                  <AssignTasksListFormCol>
                    <AssignTasksListFormInputSelect>
                      <select id="" name="">
                        <option value="Select Waste Type">
                          Select Waste Type
                        </option>
                        <option value="32 Gallon">32 Gallon</option>
                        <option value="64 Gallon">64 Gallon</option>
                        <option value="96 Gallon">96 Gallon</option>
                      </select>
                      <div className="btn" onClick={showDropDownUsers}>
                        <div>Choose Collectors</div>
                        <span>
                          {!dropDownUsers ? (
                            <RiArrowDropRightLine />
                          ) : (
                            <RiArrowDropDownLine />
                          )}
                        </span>
                      </div>
                      <div
                        className={`drop-down ${
                          dropDownUsers ? "show-drop-down" : ""
                        }`}
                      >
                        <ul>
                          <li>
                            <div>
                              <span>Cao Tuan Kiet</span>
                            </div>
                          </li>
                          <li>
                            <div className="selected">
                              <span>Cao Hoang Kiet</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </AssignTasksListFormInputSelect>
                    <AssignTasksListFormInputText
                      placeholder="Assign area"
                      wid="100%"
                    />
                    <AssignTasksListFormDate>
                      <AssignTasksListFormInputText
                        type="text"
                        wid="45%"
                        onMouseEnter={(e) => {
                          e.target.disabled = false;
                          return (e.target.type = "date");
                        }}
                        onMouseLeave={(e) => {
                          e.target.disabled = true;
                          return (e.target.type = "text");
                        }}
                        placeholder="Pick up date"
                      />
                      <AssignTasksListFormInputText
                        type="text"
                        wid="45%"
                        onMouseEnter={(e) => {
                          e.target.disabled = false;
                          return (e.target.type = "time");
                        }}
                        onMouseLeave={(e) => {
                          e.target.disabled = true;
                          return (e.target.type = "text");
                        }}
                        placeholder="Pick up time"
                      />
                    </AssignTasksListFormDate>
                  </AssignTasksListFormCol>
                  <AssignTasksListFormCol>
                    <AssignTasksListFormInputTextArea placeholder="Brief description of waste to be removed" />
                  </AssignTasksListFormCol>
                </AssignTasksListFormRow>
                <AssignTasksListFormBtn>
                  <a href="#">Submit</a>
                </AssignTasksListFormBtn>
              </AssignTasksListFormContent>
            </AssignTasksListForm>
          </AssignTasksList>
        </AssignTasksContent>
      </AssignTasksContainer>
    </AssignTasksSession>
  );
};

export default AssignTasksDetails;
