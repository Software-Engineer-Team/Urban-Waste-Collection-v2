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
import { RiArrowDropDownLine } from "react-icons/ri";

const AssignTasksDetails = () => {
  return (
    <AssignTasksSession>
      <AssignTasksContainer>
        <AssignTasksContent>
          <AssignTasksButtons>
            <div>
              <span className="active">Collectors</span>
            </div>
            <div>
              <span>Collectors</span>
            </div>
            <div>
              <span>Collectors</span>
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
                <img src="/images/rubish1.jpg" alt="" />
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
                      <div className="btn">
                        <div>Select Waste Type</div>
                        <span>
                          <RiArrowDropDownLine />
                        </span>
                      </div>
                      <div className="drop-down">
                        <ul>
                          <li>
                            <div>
                              <span>Select Waste Type</span>
                            </div>
                          </li>
                          <li>
                            <div className="selected">
                              <span>Select Waste Type</span>
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
